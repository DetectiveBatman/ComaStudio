module.exports = function launchAPI(app, db) {
    app.post('/api/getPortfolio', (req, res, next) => {

      function getQuery(req) {
        if (req.body.id) {
          return `SELECT * FROM portfolio WHERE id=${req.body.id}`;
        } else if (req.body.subcategory) {
          return `SELECT * FROM portfolio WHERE subcat='${req.body.subcategory}'`;
        } else if (req.body.artist) {
          return `SELECT * FROM portfolio WHERE artist='${req.body.artist}'`;
        }
        return `SELECT * FROM portfolio`;
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

    /* Categories */

    app.post('/api/getCategories', (req, res, next) => {
      let sql = `SELECT * FROM categories`;
      db.query(sql, (err, resp, fld) => {
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
        } else {
          return`SELECT * FROM news`;
        }
      }
      db.query(getQuery(req), (err, resp, fld) => {
          if (err) console.log(err);

          res.json({
            ok: 'true',
            res: resp
          });
      });

    });

    /* users */

    app.post('/api/getUsers', (req, res, next) => {
      function getQuery(req){
        let parameter = req.body;
        if (parameter.username) {
          return `SELECT id, username, photo, biography, role, name FROM users WHERE username='${parameter.username}'`;
        }
        return `SELECT id, username, photo, biography, role, name FROM users`;
      }

      db.query(getQuery(req), (err, resp, fld) => {
        if (err) console.log(err);

        res.json({
          ok: 'true',
          res: resp
        });
      });
    });

    /* Radio */
    app.post('/api/getRadio', (req, res, next) => {
      function getQuery(req){
        let parameter = req.body;
        return `SELECT * FROM radio`;
      }

      db.query(getQuery(req), (err, resp, fld) => {
        if (err) console.log(err);

        res.json({
          ok: 'true',
          res: resp
        });
      });
    });

    /* About Us */
    app.post('/api/getAboutUs', (req, res, next) => {
      if (req.body.lang == 'en') {
        var sql = `SELECT * FROM aboutUs WHERE en='true'`;
      } else {
        var sql = `SELECT * FROM aboutUs WHERE en='false'`;
      }
      db.query(sql, (err, resp, fld) => {
        if (err) console.log(err);

        res.json({
          ok: 'true',
          res: resp
        });
      });
    });

    app.post('/api/message', (req, res, next) => {
      function getQuery(req){
        let parameter = req.body;
        if (parameter.getMessages) {
          return `SELECT * FROM messages`;
        } else {
          if (parameter.email && parameter.name && parameter.subject && parameter.text) {
            return `INSERT INTO messages (email, name, text, subject) VALUES (
              '${parameter.email}',
              '${parameter.name}',
              '${parameter.text}',
              '${parameter.subject}'
            )`;
          } else {
            return false;
          }
        }
      }

      let query = getQuery(req);
      if (query != false) {
        if (query[0] == 'S') {
          db.query(query, (err, resp, fld) => {
            if (err) console.log(err);

            res.json({
              ok: true,
              res: resp
            });
          });

        } else {
          db.query(query, (err, resp, fld) => {
            if (err) console.log(err);

            res.json({
              ok: true
            });
          });
        }
      } else {
        res.json({
          ok: false
        });
      }
    });

}
