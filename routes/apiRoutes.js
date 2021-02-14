
const tableData = require('../db/tables.json');
const waitListData = require('../db/wait.json');


module.exports = (app) => {
  app.get('/api/tables', (req, res) => res.json(tableData));
  app.get('/api/wait', (req, res) => res.json(waitListData));

  app.post('/api/tables', (req, res) => {
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  app.post('/api/clear', (req, res) => {
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
