/* eslint-disable import/no-extraneous-dependencies */
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');

const { STATUS_CODES } = require('./statusCodes');

const URL = 'https://httpstatuses.com';

async function getDetails(data) {
  const $ = cheerio.load(data);
  const headline = await $('.code')
    .find('h1')
    .first()
    .text();
  const summary = await $('.code')
    .find('p')
    .first()
    .text();
  return { headline, summary };
}

async function fetchData(statusCode) {
  try {
    const rawData = await fetch(`${URL}/${statusCode}`);
    return await rawData.text();
  } catch (err) {
    throw new Error(err);
  }
}

async function orchestrator() {
  const result = {};
  const promises = await STATUS_CODES.map(async statusCode => {
    const data = await fetchData(statusCode);
    const details = await getDetails(data);
    result[statusCode] = details;
  });
  await Promise.all(promises);
  fs.writeFileSync('data.json', JSON.stringify(result), 'utf-8', function(err) {
    if (err) {
      throw new Error(err);
    }
  });
}

module.exports = {
  orchestrator,
};
