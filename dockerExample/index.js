const express = require('express');

const app = express();
const port = 3001;

(async () => {
  app.get('/', async (req, res) => {
    res.send('Hello from Docker');
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
})();
