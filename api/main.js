module.exports = function launchAPI(app, db) {
    app.post('/api/getPortfolio', (req, res, next) => {

      function getQuery(req) {
        if (req.body.id) {
          return `SELECT * FROM portfolio WHERE id=${req.body.id}`;
        } else if (req.body.category) {
          return `SELECT * FROM portfolio WHERE category='${req.body.category}'`;
        }
        else {
          return `SELECT * FROM portfolio`;
        }
      }

      db.query(getQuery(req), (err, resp, fld) => {
        if (err) console.error(err);

        res.json({
          ok: 'true',
          res: resp
        });
      });
    });

    app.post('/api/getSubcats', (req, res, next) => {

      if (req.body.category) {
        let query = `SELECT * FROM subcategories WHERE enCategory='${req.body.category}'`;

        db.query(query, (err, resp, fld) => {
          if (err) console.error(err);

          res.json({
            ok: 'true',
            res: resp
          });
        });
      }

    });
}
