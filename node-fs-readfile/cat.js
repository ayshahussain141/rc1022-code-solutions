const fs = require('fs');
let i = 2;
function readFiles() {
  if (i === process.argv.length) {
    return;
  }
  fs.readFile(process.argv[i], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    i++;
    readFiles();
  });
}
readFiles();
