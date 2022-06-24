const express = require('express');
const morgan = require('morgan');
//const routes = require('./routes/posts');
const path = require('path');

const app = express(); //creates an express app

app.use(morgan('dev')); //logging middleware
app.use(express.static(path.join(__dirname,'./public')));
app.use(express.urlencoded({ extended: false }));

const layout = require('./views/layout');

app.get('/', (req,res) => {
  res.send(layout(''));
})

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening in port: ${PORT}`);
});