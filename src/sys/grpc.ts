import { log } from './log';
import * as path from 'path';
import * as _ from 'lodash';
import * as protoLoader from '@grpc/proto-loader';
import * as grpc from 'grpc';
import * as pjson from '../../package.json';

const PROTO_PATH = path.resolve(__dirname, '../../protobuf/');
const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};
  let grpcclient: any = {};
  let packageDefinition: protoLoader.PackageDefinition;
  try {
    packageDefinition = protoLoader.loadSync(path.resolve(PROTO_PATH, `${pjson.name}.proto`), options);
  } catch (e) {
    packageDefinition = protoLoader.loadSync(path.resolve(PROTO_PATH, 'metaservice.proto'), options);
  }

  const packageObject = grpc.loadPackageDefinition(packageDefinition);
  const grpceastwestserver = new grpc.Server();
  const GRPC_HOST = process.env.GRPC_HOST || '0.0.0.0';
  const GRPC_EAST_WEST_PORT = process.env.GRPC_EAST_WEST_PORT || '3002';



  export default {
    grpceastwestserver,
    grpcclient,
    request(channel: string, message: any, metadata: grpc.Metadata, callback: (error: Error | null, response: any) => void) {
        const channelnames = channel.split('/');
        let channeldns = `${channelnames[0]}`;
    
        // Bind full DNS to call services from namespace
        if (process.env.DNS_SUFFIX) {
          channeldns = `${channelnames[0]}${process.env.DNS_SUFFIX}`;
        }
        if (!grpcclient[channeldns]) {
          log(
            `gRPC client ${channelnames[0]} has created on ${pjson.name
            } and cached to grpc clients list`
          );
          const protopath = path.resolve(PROTO_PATH, `${channelnames[0]}.proto`);
          const packageDefinition = protoLoader.loadSync(protopath, options);
          const packageObject:any = grpc.loadPackageDefinition(packageDefinition);
    

            grpcclient[channeldns] = new packageObject['services'][channelnames[0]](
              `${channelnames[0]}:${GRPC_EAST_WEST_PORT}`,
              grpc.credentials.createInsecure(),
            );
        }
        grpcclient[channeldns][channelnames[1]](message, metadata, callback);
      },   
    listennorthsouth(grpcObj:any) {
        const service:any = packageObject['services'];

        grpceastwestserver.addService(_.has(service, pjson.name) ? service[pjson.name].service 
        : service.metaservice.service,grpcObj);
        const grpccreds = grpc.ServerCredentials.createInsecure();
        grpceastwestserver.bind(`${GRPC_HOST}:${GRPC_EAST_WEST_PORT}`, grpccreds);
        grpceastwestserver.start();
        log(`GRPC NORTH SOUTH serving on ${GRPC_HOST}:${GRPC_EAST_WEST_PORT}`);
      },
      getMetaData() {
        return new grpc.Metadata()
      }
}







