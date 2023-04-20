import { MyCallbackType, log } from "../sys/log";

export default (incomming:any,callback:MyCallbackType)=>{
    log(incomming)
    callback(null)
}