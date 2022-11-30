
let content = 3;
console.log(3);
const countDown = setInterval(() => {
  content--;
  if (content === 2) {
    console.log(2);
  }
  if (content === 1) {
    console.log(1);
  }
  if (content === 0) {
    console.log('"Blast off!"');
    clearInterval(countDown);
  }
}, 1000);
