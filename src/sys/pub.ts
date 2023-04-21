import amqp from 'amqplib';
import { name as pname } from '../../package.json'
import * as protoroot from "../../protobuf/build";
import _ from "lodash";
import { v1 as uuidv1 } from "uuid";
import { MyCallbackType, log } from './log';
const connectToRabbitMQ = async (routingKey: string, message: any, callback: MyCallbackType) => {


  try {
    const protopackage = _.get(protoroot, routingKey)
    const connection = await amqp.connect(`amqp://${process.env.RABBIT_MQ_HOST}`);
    const channel = await connection.createChannel();
    const exchange = process.env.EXCHANGE ?? 'fp';
    const protomsg = protopackage['event'].create(message)
    const binary = protopackage['event'].encode(protomsg).finish()
    const option = {
      headers: { retry: 0, requeue: false }, //Retry can be used on requeue upto max attempt
      messageId: uuidv1(), //unique msg id
      appId: pname, //Publisher name can be identified on consumer end
      timestamp: new Date().getTime() //publish time 
    }
    channel.publish(exchange, routingKey, binary, option);
    callback(null)
    setTimeout(() => {
      connection.close();

    }, 500);
  } catch (error) {
    callback(error as Error)
  }
};






export default connectToRabbitMQ;

