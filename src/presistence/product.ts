import  mysql from '../connectors/mysql'
import { MyCallbackType } from '../sys/log';
import sysredis from '../connectors/sysredis'
class ProductPersistance {
    getAll(callback:MyCallbackType): void {
      const redis = sysredis.getClient()
        mysql.query('SELECT * FROM product  order by 1 desc', [], (err, rows) => {
            if (err) {
                callback(err)
            }else{callback(null,rows)}
          });
    }
  }
  
export default new ProductPersistance();