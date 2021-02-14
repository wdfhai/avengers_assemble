
const path = require('path');


module.exports = (app) => {
  app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/tables.html'));
  });

  app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/reservations.html'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
