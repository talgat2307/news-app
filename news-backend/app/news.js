const router = require('express').Router();

const createRouter = (db) => {

  router.get('/', (req, res) => {
    const sql = 'SELECT * FROM news';
    db.query(sql, (err, result) => {
      if (err) throw err;
      const news = result.reverse();
      res.send(news);
    });
  });

  router.post('/', (req, res) => {
    const news = req.body;
    const sql = 'INSERT INTO news SET ?';
    db.query(sql, news, (err, result) => {
      news.id = result.insertId;
      res.send(news);
    });
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM news WHERE id = ?';

    db.query(sql, [id], (err, result) => {
      const singleNews = result[0];
      if (err) throw err;
      res.send(singleNews);
    });
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM news WHERE id = ?';

    db.query(sql, [id], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  return router;
};

module.exports = createRouter;