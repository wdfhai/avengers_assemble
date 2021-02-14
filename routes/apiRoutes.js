
const teamData = require('../db/team.json');
const appsListData = require('../db/apps.json');


module.exports = (app) => {
  app.get('/api/team', (req, res) => res.json(teamData));
  app.get('/api/apps', (req, res) => res.json(appsListData));

  app.post('/api/team', (req, res) => {
    if (teamData.length < 5) {
      teamData.push(req.body);
      res.json(true);
    } else {
      appsListData.push(req.body);
      res.json(false);
    }
  });

  app.post('/api/clear', (req, res) => {
    teamData.length = 0;
    appsListData.length = 0;

    res.json({ ok: true });
  });
};
