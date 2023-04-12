import Redis, { Redis as RedisInstance, RedisOptions } from 'ioredis';
import {log} from '../sys/log';


const opts: RedisOptions = 
   {
      host: process.env.SYSREDIS_HOST,
      port: parseInt(process.env.SYSREDIS_PORT ?? '6379'),
      db: 0
    }

let redis: RedisInstance | null = null;

const getClient = function (): RedisInstance {
  if (!redis || !(redis.status === 'connecting' || redis.status === 'connect' || redis.status === 'ready')) {
    redis = new Redis(opts);
    redis.on(`error`, (error) => log(`Sys redis ${error}`, true));
  }
  return redis;
};

export default { getClient };
