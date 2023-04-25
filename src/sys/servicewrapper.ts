
import grpc from './grpc';

import { name as pname } from '../../package.json'
import channels  from '../channels'
import _ from "lodash";
import { log, MyCallbackType } from './log';
import async from 'async'
const synchronouseastwestchannels :  Channel[] = []
const grpceastwestobj :any= {}
interface Channel {
    fullname: string;
    name: string;
    execution: (incomming: any,context:any, callback: MyCallbackType) => any;
  }





  export default ()=>{
    _.each(channels, function (options, functionname) {
        let fun=require(`../channels/${functionname}`)
        const channel = {
          fullname: `${pname}/${functionname}`,
          name: `${functionname}`,
          execution:  fun.default
        }
        if (options) {
          if (options[process.env.EAST_WEST || 'eastwest']) {
            synchronouseastwestchannels.push(channel)
          }
        } else {
          log(`Please set options for channel ${functionname} in /channels.js file`)
        }
      })
      async.each(synchronouseastwestchannels, channel => {
       
        grpceastwestobj[channel.name] = function (call:any, callback:MyCallbackType) {
          let { metadata, request } = call
          if (!metadata || typeof metadata.set !== 'function') {
            metadata = grpc.getMetaData()
          }
          metadata.set(process.env.EAST_WEST || 'eastwest', 'true')
          channel.execution(request, metadata, function (err, response) {
            callback(err, response)
          })
        }
        
      })
    
      grpc.listennorthsouth(grpceastwestobj)
    return {
        grpceastwestserver:grpc.grpceastwestserver
    }
  }