import chalk from 'chalk';
import pjson from '../../package.json';
function log(message: any, critical = false, debug = false): void {
 
  if (process.env.NODE_ENV === 'unittest') {
    return;
  }
  const prefix = critical ? '[ERROR]' : debug ? '[DEBUG]' : '[INFO]';
  if (critical) {
    console.error(chalk.green(`[${pjson.name}@${pjson.version}]`), chalk.red(`${prefix}`), message);
  } else if (process.env.LOGS_ERR === 'true') {
    return;
  } else if (process.env.LOGS_INFO === 'true') {
    if (!debug) {
      console.log(chalk.green(`[${pjson.name}@${pjson.version}]`), chalk.yellow(`${prefix}`), message);
    }
  } else if (process.env.LOGS_DEBUG === 'true' && debug) {
    console.debug(chalk.green(`[${pjson.name}@${pjson.version}]`), chalk.cyan(`${prefix}`), message);
  }
}

type MyCallbackType = (error: Error | null, result?: any) => void;
export { log, MyCallbackType };


