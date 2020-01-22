#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const wrap = require('word-wrap');
const data = require('./data.json');

const [, , ...args] = process.argv;

const arg = args[0];

if (data[arg]) {
  console.log(
    boxen(
      `-- ${chalk.white.bold(`${data[arg].headline} --`)}\n\n${wrap(
        chalk.white(data[arg].summary),
        { width: 50, indent: `` }
      )}`,
      {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
      }
    )
  );
} else {
  console.log(
    boxen(chalk.green("Sorry, I don't know that one yet"), {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
    })
  );
}
