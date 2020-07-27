#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const wrap = require('word-wrap');
const http = require('http');
const data = require('./data.json');

const [, , ...args] = process.argv;

const statusCode = args[0];
const listAllStatusCodes = statusCode === '-l' || statusCode === '-list';
const isPlanTextRequest = args[1] === '-t';

switch (true) {
  case listAllStatusCodes:
    console.log(http.STATUS_CODES);
    break;
  case !!data[statusCode] && isPlanTextRequest:
    console.log(`${data[statusCode].headline}\n${data[statusCode].summary}`);
    break;
  case !!data[statusCode]:
    console.log(
      boxen(
        `-- ${chalk.white.bold(`${data[statusCode].headline} --`)}\n\n${wrap(
          chalk.white(data[statusCode].summary),
          { width: 50, indent: `` }
        )}`,
        {
          padding: 1,
          margin: 1,
          borderStyle: 'round',
        }
      )
    );
    break;
  default:
    console.log(
      chalk.white(`Sorry, ${statusCode} is not a valid HTTP status code`),
    )
    break;
}
