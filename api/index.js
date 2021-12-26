/*const app = require('express')();
const { v4 } = require('uuid');

app.get('/', (req, res) => {
  const path = `/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;*/

const app = require('../dist/test/server/main');
module.exports = app;
