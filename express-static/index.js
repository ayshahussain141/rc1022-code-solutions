const express = require('express');
const app = express();
const path = require('path');
const join = path.join(__dirname, 'public');
const method = express.static(join);
app.use(method);
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
