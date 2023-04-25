
import connectToRabbitMQ from './pub';
import gprc from './grpc'
const comms={
    publish:connectToRabbitMQ,
    request:gprc.request
}
export default comms;