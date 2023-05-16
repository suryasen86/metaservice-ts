"use strict";
if (process.env.NODE_ENV === "development") {
  require('env2')('./devenv.json');
}
import http from 'http'
import productRouter from './routers/product';
import express, { Request, Response } from 'express'
import consumer from './sys/sub';
import { log } from './sys/log';
import gracefulexit from './sys/gracefulexit'
consumer.startListening();

import servicewrapper from './sys/servicewrapper'
servicewrapper()
const app = express();

app.use('/api/product', productRouter);
//handling 404 error  
app.use(async (req: Request, res: Response) => {
  res.json({ code: process.env.NOT_FOUND_CODE, message: `${process.env.NOT_FOUND_CODE} Not Found` })
})

const port = process.env.SERVICE_PORT || 3000
const server = http.createServer(app)
server.listen(port, () => {
  log(`REST serving on port ${port}`)
})
gracefulexit(server)