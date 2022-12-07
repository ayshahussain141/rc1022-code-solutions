const fs = require('fs');
const express = require('express');
const app = express();
const json = require('./data.json');

app.get('/api/notes', (req, res) => {
  res.status(200).json(Object.values(json.notes));
});

app.get('/api/notes/:id', (req, res) => {
  const note = json.notes[req.params.id];
  if (note) {
    res.json(note);
  } else if (Math.sign(req.params.id) === -1 || Math.sign(req.params.id) === 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (req.params.id !== note) {
    res.status(404).json({ error: 'error' });
  }

});

app.use(express.json());
app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content) {
    json.notes[json.nextId] = {
      content: req.body.content,
      id: json.nextId
    };
    json.nextId++;

    var three = JSON.stringify(json, null, 2);
    fs.writeFile('data.json', three, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
      } else {
        res.status(201).json(json.notes);
      }
    });
  }
}
);

app.delete('/api/notes/:id', (req, res) => {
  const note = json.notes[req.params.id];
  if (note) {
    delete json.notes[req.params.id];
    var three = JSON.stringify(json, null, 2);
    fs.writeFile('data.json', three, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
      } else {
        res.status(201).json(json.notes);
      }
    });
  } else if (Math.sign(req.params.id) === -1 || Math.sign(req.params.id) === 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (req.params.id !== note) {
    res.status(404).json({ error: 'id does not exist' });
  }
});

app.put('/api/notes/:id', (req, res) => {
  if (Math.sign(req.params.id) === -1 || Math.sign(req.params.id) === 0 || !req.body.content) {
    res.status(400).json({ error: 'id is a not positve integar or content does not exist' });
  } else if (!json.notes[req.params.id]) {
    res.status(404).json('id does not exist');
  } else if (json.notes[req.params.id]) {
    json.notes[req.params.id].content = req.body.content;
    var three = JSON.stringify(json, null, 2);
    fs.writeFile('data.json', three, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
      }
      res.status(200).json(json.notes);
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
