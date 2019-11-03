module.exports = function launchAPI(app, db) {
    app.post('/api/getPortfolio', (req, res, next) => {

      if (req.body.id) {
        let query = `SELECT * FROM portfolio WHERE id=${req.body.id}`;
      } else if (req.body.category) {
        let query = `SELECT * FROM portfolio WHERE category=${req.body.category}`
      }
      else {
        let query = `SELECT * FROM portfolio`;
      }

      db.query(query, (err, resp, fld) => {
        if (err) console.error(err);

        res.json({
          ok: 'true',
          res: resp
        });
      });
    });
}
