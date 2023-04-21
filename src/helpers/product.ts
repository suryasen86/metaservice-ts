import ProductPersistance from '../presistence/product'
import { MyCallbackType } from '../sys/log';
class ProductHelper {
    getAllProduct(callback: MyCallbackType) {
        
        ProductPersistance.getAll(callback)
    }
}
export default new ProductHelper();