import * as mysql from 'mysql2';
import { log, MyCallbackType } from '../sys/log';

const pool = mysql.createPool({
  host: process.env.MY_SQL_HOST,
  user: process.env.MY_SQL_USER,
  password: process.env.MY_SQL_PASSWORD,
  database: process.env.MY_SQL_DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const mysqlexport = {
  query(query: string, params: (string | number)[], callback: MyCallbackType): void {
    if (process.env.LOG_MYSQL_LATENCY) console.time('mysql_latency');
    pool.getConnection((err: mysql.QueryError | NodeJS.ErrnoException | null, conn) => {
      if (err != null) {
        log(`[ERROR] Failed to getConnection from mySQL - ${err}`, true, true);
        if (conn != null) {
          conn.release();
        }
        if (callback != null) {
          if (process.env.LOG_MYSQL_LATENCY) console.timeEnd('mysql_latency');
          return callback(new Error(`DB error`));
        }
      }
      conn.query(query, params, (_err, rows) => {
        if (process.env.LOG_MYSQL_LATENCY) console.timeEnd('mysql_latency');
        if (_err != null) {
          log(_err, true);
        }
        conn.release();
        if (callback != null) {
          return callback(_err, rows);
        }
      });
    });
  },

  getconnection(callback: MyCallbackType): void {
    pool.getConnection((err: mysql.QueryError | NodeJS.ErrnoException | null, conn) => {
      if (err != null) {
        log(`[ERROR] Failed to getConnection from mySQL - ${err}`, true);
        if (conn != null) {
          conn.release();
        }
        if (callback != null) {
          callback(new Error(`DB error`));
        }
      }
      callback(err, conn);
    });
  },

  end(callback: MyCallbackType): void {
    pool.end(callback);
  },
};

export default mysqlexport;