const express = require('express');
const app = express();
let nextId = 1;

const grades = {};

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const key in grades) {
    arr.push(grades[key]);
  }
  res.json(arr);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
app.use(express.json());

app.post('/api/grades', (req, res) => {

  grades[nextId] = {
    name: req.body.name,
    id: nextId++,
    course: req.body.course,
    score: req.body.score
  };
  let obj = {};
  for (const key in grades) {
    obj = grades[key];
  }
  res.status(201).send(obj);

});
