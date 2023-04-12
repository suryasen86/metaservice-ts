import  mysql from '../connectors/mysql'
import { MyCallbackType } from '../sys/log';
class ProductPersistance {
    getAll(callback:MyCallbackType): void {
        mysql.query('SELECT * FROM product', [], (err, rows) => {
            if (err) {
                callback(err)
            }else{callback(null,rows)}
          });
    }
  }
  
export default new ProductPersistance();