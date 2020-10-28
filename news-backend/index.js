const express = require('express');
const cors = require('cors');
const news = require('./app/news');
const comments = require('./app/comments');
const mysql = require('mysql');
const config = require('./config');
const app = express();
const port = 8000;

const connection = mysql.createConnection(config.db);

app.use(cors());
app.use(express.json());

connection.connect((err) => {
  if (err) throw err;

  app.use('/news', news(connection));
  app.use('/comments', comments(connection));

  app.listen(port, () => console.log('Server started!'));
})

