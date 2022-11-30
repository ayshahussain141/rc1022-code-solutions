const data = Math.random();
var num = data.toString() + '\n';
const fs = require('fs');
fs.writeFile('random.txt', num, 'utf8', err => {
  if (err) {
    console.error(err);
  }
});
