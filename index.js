const chalk = require('chalk');
const data = require('./data.json');

const argsArray = process.argv;
const arg = argsArray[2];

if (data[arg]) {
  console.log(chalk.hex('#f07c59')(data[arg].headline));
  console.log(chalk.hex('#d2f5d0')(data[arg].summary));
} else {
  console.log('nothing yet...');
}
