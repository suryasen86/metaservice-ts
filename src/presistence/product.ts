import  mysql from '../connectors/mysql'
import { MyCallbackType } from '../sys/log';
import sysredis from '../connectors/sysredis'
import comms from '../sys/comms';

class ProductPersistance {
    getAll(callback:MyCallbackType): void {
      comms.publish("metaservice.otp.registered",{mobile:"8356827126"})
        mysql.query('SELECT * FROM product  order by 1 desc', [], (err, rows) => {
            if (err) {
              callback(err)
            }else{
              callback(null,rows)
            }
          });
    }
  }
  
export default new ProductPersistance();