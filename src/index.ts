"use strict";
if(process.env.NODE_ENV==="development"){
  require('env2')('./devenv.json');
}

import connectToRabbitMQ from './sys/pub';
import productRouter from './routers/product';
import express,{  Request, Response } from 'express'
import consumer from './sys/sub';

consumer.startListening();

connectToRabbitMQ("metaservice_ts.registered1111",{qdqw:"Qdssqwd"})
const app = express();



app.use('/product',productRouter);
app.use(async (error: Error, req: Request, res: Response) => {
    console.log("Eoorrrrrrrr", error.message);
    // res.send({ code:  500, message: error.message });
})
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});