const pro = process.argv[2];
const pro2 = process.argv[3];
const fs = require('fs');
fs.readFile(pro, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  fs.writeFile(pro2, data, 'utf8', err => {
    if (err) {
      console.error(err);
    }
  });
});
