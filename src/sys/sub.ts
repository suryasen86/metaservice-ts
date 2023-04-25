import amqp from 'amqplib';
import { log, MyCallbackType } from './log';
import { name as pname } from '../../package.json'
import reaction from '../reaction'
import * as protoroot from "../../protobuf/build";
import _ from "lodash"; 
interface Channel {
  reactionKey: string;
  filename: string;
  execution: (input: any, callback: MyCallbackType) => any;
}
let _reactions: Channel[] = []
Object.keys(reaction).forEach(async function (key) {
  let fun = await import(`../reaction/${reaction[key]}`)
  let channel :Channel= {
    reactionKey: key,
    filename: reaction[key],
    execution: fun.default
  }
  _reactions.push(channel)
});

interface MessageHandler {
  (channel: string, message: Buffer, callback: MyCallbackType): void;
}
let bindSubcriberEvent: any = []
const onMessageReceived: MessageHandler = async (channel: string, message: Buffer, callback: MyCallbackType) => {
  try {
    const reaction = _reactions.find(obj => obj.reactionKey == channel)
    const protopackage = _.get(protoroot, channel)

    const protomsg = protopackage['event'].decode(message)
    if (reaction && reaction.execution) {
      reaction.execution(protomsg, callback)
    } else {
      log(`No handler found for ${channel}`)
      callback(null)
    }
  } catch (error) {
    callback(error as Error)
  }
};
class RabbitMQConsumer {
  private readonly queue: string;

  constructor(queue: string) {
    this.queue = queue;
  }

  public async startListening() {
    try {
      const connection = await amqp.connect(`amqp://${process.env.RABBIT_MQ_HOST}`);
      connection.on('connect', () => log(`Reaction subscriber's connection is created.`))
      connection.on('disconnect', params => {
        log(`Reaction subscriber connection catch the unhandled errors.`, true)
        log(params.err.message, true)
      })
      connection.on('error', error => {
        log(`Reaction subscriber connection catch unhandled error.`, true)
        log(error, true, false)
      })
      connection.on('blocked', reason => {
        log(`Reaction subscriber connection stop due to low resources like RAM`, true)
        log(reason, true, false)
      })
      connection.on('unblocked', () => {
        log(`Reaction connection has resume the subscribing`, false)
      })
      const exchange = process.env.EXCHANGE ?? 'fp';
      const channel = await connection.createChannel();
      await channel.assertQueue(this.queue, { durable: true });
      _reactions.forEach(reaction => {
        bindSubcriberEvent.push(channel.bindQueue(this.queue, exchange, reaction.reactionKey))
      })

      bindSubcriberEvent.push(
        channel.consume(
          this.queue,
          (msg) => {
            if (msg) {
              const message = msg.content;
              onMessageReceived(msg.fields.routingKey, message, (err, res) => {
                if (err) channel.nack(msg)
                else channel.ack(msg)
              });
            }
          },
          { noAck: false }
        )
      )
      Promise.all(bindSubcriberEvent)

    } catch (error) {
      log(error, true);
    }
  }
}



const consumer = new RabbitMQConsumer(pname);
export default consumer;