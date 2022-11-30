const data = process.argv[2] + '\n';
const fs = require('fs');
fs.writeFile('note.txt', data, 'utf8', err => {
  if (err) {
    console.error(err);
  }
});
