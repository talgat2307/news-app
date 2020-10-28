const router = require('express').Router();

const createRouter = (db) => {

  router.get('/', (req, res) => {
    const sql = 'SELECT * FROM comments';
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  router.post('/', (req, res) => {
    const comments = req.body;
    const sql = 'INSERT INTO comments SET ?';
    db.query(sql, comments, (err, result) => {
      comments.id = result.insertId;
      res.send(comments);
    });
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM comments WHERE id = ?';

    db.query(sql, [id], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });


  return router;
};


module.exports = createRouter;