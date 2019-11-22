const chalk = require('chalk');
const data = require('./data.json');

const argsArray = process.argv;
const arg = argsArray[2];

if (data[arg]) {
  console.log(chalk.hex('#43e86f').inverse(data[arg].headline));
  console.log(chalk.hex('#d2f5d0')(data[arg].summary));
} else {
  console.log('nothing yet...');
}
