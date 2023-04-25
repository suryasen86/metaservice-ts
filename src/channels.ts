
interface ChannelType{
    [key: string]:EventType
}
interface EventType {
    [key: string]: Boolean;
  }
  const channels:ChannelType={
    commsexample: {
        eastwest: true
    },
  }
  export default channels