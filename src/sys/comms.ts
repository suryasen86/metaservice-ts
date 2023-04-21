
import connectToRabbitMQ from './pub';
const comms={
    publish:connectToRabbitMQ
}
export default comms;