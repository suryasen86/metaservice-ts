import { log } from "./log"
import { name as pname } from '../../package.json'
import sysredis from '../connectors/sysredis'
import mysql from '../connectors/mysql'
let server: any = null;
const releaseResources = (_cb: any) => {

  try {
    sysredis.getClient().quit()
    log(`SYSRedis has closed.`)
    mysql.end(err => {
      if (err) {
        log(err, true, true)
      }
      log(`MySQL connection has closed.`)
      _cb()
    })
  } catch (e) {
    log(e, true, true)
    _cb()
  }
}
const gracefulShutdown = function () {
  log(`Service pid ${process.pid} force shuting down.`)
  log(`Service ${pname} termination request received. Waiting for pending requests to finish.`)
  server.close(() => {
    log(`REST(Express) Server has closed.`)
    //Stop cache, db servers.
    releaseResources(() => {
      log(`Service ${pname} has gracefully exit.`)
      //Exit node service 
      setTimeout(() => process.exit(), 3000)
    })
  })

}
const gracefulexit = (_server: any) => {
  server = _server;
  process.on('SIGTERM', gracefulShutdown)
  // register event on INT signal e.g. Ctrl-C
  process.on('SIGINT', gracefulShutdown)
}
export default gracefulexit;