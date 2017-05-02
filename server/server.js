const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.use('/js', express.static(path.join(__dirname + '/../client/js')));
app.use('/bower_components', express.static(path.join(__dirname + '/../bower_components')));
app.use('/templates', express.static(path.join(__dirname + '/../client/templates')));

let blogItems = [
  {title: "Some Title", id: 1, description: "This is a book This is a book This is a book This is a book This is a book This is a book This is a book This is a book",
   comments: [
     {id: 1, text: "nice book"},
     {id: 2, text: "wooowww nice book"},
     {id: 3, text: "nice!!!!"}
   ]
  },
  {title: "Some Food", id: 2, description: "This is a Food"},
  {title: "Some Movie", id: 3, description: "This is a Movie"},
  {title: "Some Tea", id: 4, description: "This is a Tea"},
  {title: "Some Tea", id: 5, description: "This is a Tea"},
  {title: "Some Tea", id: 6, description: "This is a Tea"},
  {title: "Some Tea", id: 7, description: "This is a Tea"}
];

app.get('/blogItems', (req, res) => {
  res.json(blogItems);
})

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
})

app.listen(port, () => {
  console.log(`Listening at port ${port}`)
});
