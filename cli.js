#!/usr/bin/env node

const chalk = require('chalk');
const data = require('./data.json');

const [, , ...args] = process.argv;

const arg = args[0];

if (data[arg]) {
  console.log(chalk.hex('#43e86f').inverse(data[arg].headline));
  console.log(chalk.hex('#d2f5d0')(data[arg].summary));
} else {
  console.log('nothing yet...');
}
