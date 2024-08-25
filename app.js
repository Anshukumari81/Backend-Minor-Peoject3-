const express = require('express');
const app = express();
app.use(express.json());

// Data storage
let items = [];

const link = "123"; 

// Index route
app.get('/', (req, res) => {
  res.send('Welcome to Pizza Store!');
});

// Items route
app.get('/items', (req, res) => {
  const items = [
    { id: 1, name: 'Pizza', price: 10.99 },
    { id: 2, name: 'Burger', price: 8.99 },
    { id: 3, name: 'Fries', price: 5.99 }
  ];
  res.json(items);
});

// Item route
app.get('/items/:id', (req, res) => {
    const link = "123"; 
    const id = parseInt(link);
    const item = { id: 1, name: 'Pizza', price: 10.99 };
  res.json(item);
});

app.listen(8081, () => {
  console.log('Server started on port 8081');
});


// POST /items
app.post('/items', (req, res) => {
  const item = req.body;
  items.push(item);
  res.send(`Item added successfully`);
});

// GET /items
app.get('/items', (req, res) => {
  res.json(items);
});

// GET /items/:id
app.get('/items/:id', (req, res) => {
    const link = "123"; 
    const id = parseInt(link);
  if (!item) {
    res.status(404).send(`Item not found`);
  } else {
    res.json(item);
  }
});

// PUT /items/:id
app.put('/items/:id', (req, res) => {
    const link = "123"; 
    const id = parseInt(link);
  if (!item) {
    res.status(404).send(`Item not found`);
  } else {
    item.name = req.body.name;
    res.send(`Item updated successfully`);
  }
});

// DELETE /items/:id
app.delete('/items/:id', (req, res) => {
    const link = "123"; 
    const id = parseInt(link);
  if (index === -1) {
    res.status(404).send(`Item not found`);
  } else {
    items.splice(index, 1);
    res.send(`Item deleted successfully`);
  }
});

app.listen(8081, () => {
  console.log('Server started on port 8081');
});
