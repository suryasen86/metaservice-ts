import amqp from 'amqplib';
import {name as pname} from '../../package.json'

const connectToRabbitMQ = async (routingKey:string,message:any) => {
  try {
    const connection = await amqp.connect(`amqp://${process.env.RABBIT_MQ_HOST}`);
    const channel = await connection.createChannel();
    const exchange = process.env.EXCHANGE ?? 'fp' ;
    const queue = pname;
    await channel.assertQueue(queue, { durable: false });
    await channel.assertExchange(exchange, 'direct', { durable: false });

    await channel.bindQueue(queue, exchange,routingKey);
    message=JSON.stringify(message)
    channel.publish(exchange,routingKey, Buffer.from(message));

    setTimeout(() => {
      connection.close();
    }, 500);
  } catch (error) {
    console.error(error);
  }
};






export default connectToRabbitMQ;

