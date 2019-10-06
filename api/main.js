module.exports = function launchAPI(app, db) {
    app.post('/api/getPortfolio', (req, res, next) => {
      let query = `SELECT * FROM portfolio`;
      db.query(query, (err, resp, fld) => {
        if (err) console.error(err);

        res.json({
          ok: 'true',
          res: resp
        });
      });
    });
}
