const express = require('express');
const jsonServer = require('json-server');

const app = express();
const router = jsonServer.router('db.json');

app.use(jsonServer.defaults());
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`JSON server is running on port ${port}`);
});
