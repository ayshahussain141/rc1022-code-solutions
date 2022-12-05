var express = require('express');
var app = express();
app.use(function (req, res) {
  req = req.method;
  res.send('Hello world');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
