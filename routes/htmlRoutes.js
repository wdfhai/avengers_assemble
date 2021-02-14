
const path = require('path');


module.exports = (app) => {
  app.get('/team', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/team.html'));
  });

  app.get('/applications', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/applications.html'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
