import mysql from '../connectors/mysql'
import { MyCallbackType, log } from '../sys/log';
import sysredis from '../connectors/sysredis'
import comms from '../sys/comms';
import async from 'async'


class ProductPersistance {
  getAll(callback: MyCallbackType): void {

    let resp: any = null;
    let redis = sysredis.getClient()

    function getFromRedis(_cb: MyCallbackType) {
      redis.get(process.env.PRODUCT_REDIS_KEY ?? 'products', (err, res) => {
        if (err) _cb(err)
        else {
          if (res) resp = JSON.parse(res ?? ``)
          _cb(null)
        }
      })
    }

    function getFromDb(_cb: MyCallbackType) {
      if (resp) {
        _cb(null)
        return
      }
      mysql.query('SELECT * FROM product  order by 1 desc', [], (err, rows) => {
        if (err) {
          _cb(err)
        } else {

          redis.set(process.env.PRODUCT_REDIS_KEY ?? 'products', JSON.stringify(rows), (err) => {
            if (err) _cb(err)
            else {
              resp = rows
              _cb(null)
            }
          })
        }
      });
    }


    function publishEvent(_cb: MyCallbackType) {
      comms.publish("metaservice.otp.registered", { mobile: "DUMMY CONTACT NUMBER" }, _cb)
    }
    async.waterfall([getFromRedis, getFromDb, publishEvent], (err) => {
      if (err) callback(err)
      else callback(null, resp)
    })



  }
}

export default new ProductPersistance();