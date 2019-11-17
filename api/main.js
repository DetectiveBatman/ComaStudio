module.exports = function launchAPI(app, db) {
    app.post('/api/getPortfolio', (req, res, next) => {

      function getQuery(req) {
        if (req.body.id) {
          return `SELECT * FROM portfolio WHERE id=${req.body.id}`;
        } else if (req.body.subcategory) {
          return `SELECT * FROM portfolio WHERE subcat='${req.body.subcategory}'`;
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

    /* Subcats */

    app.post('/api/getSubcats', (req, res, next) => {
      function getQuery(req) {
        if (req.body.category) {
          return `SELECT * FROM subcategories WHERE enCategory='${req.body.category}'`;
        }
        else if (req.body.subcat) {
          return `SELECT * FROM subcategories WHERE en='${req.body.subcat}'`;
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

    /* news */

    app.post('/api/getNews', (req, res, next) => {
      function getQuery(req) {
        let parameter = req.body;
        if (parameter.newsId) {
          return `SELECT * FROM news WHERE id='${parameter.newsId}'`;
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
}
