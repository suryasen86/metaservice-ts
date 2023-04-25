import { MyCallbackType, log } from "../sys/log";

export default (incomming:any,context:any,callback:MyCallbackType)=>{
    callback(null,{
        fullmessage:"Comms Example Working"
    })
}