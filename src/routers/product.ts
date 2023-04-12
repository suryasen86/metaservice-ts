import express, { Request, Response } from 'express';

const router = express.Router();
import productPersistance from '../helpers/product';
// import { log } from '../sys/log';

router.get('/', (req: Request, res: Response) => {

    productPersistance.getAllProduct((err,resp)=>{

        if(err){
            res.send({code:process.env.SYSTEM_ERROR_CODE,message:err.message})
        }
 
        else res.send({code:200,message:"success",data:resp})
    })

});



export default router;