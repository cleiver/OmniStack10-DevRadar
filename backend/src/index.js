const express = require('express')
const mongoose = require('mongoose')

//------------------------------------------------------------------------------

const app = express()
mongoose.connect('mongodb://localhost:27017/devmap', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

//------------------------------------------------------------------------------

const routes = require('./routes')

app.use(express.json())
app.use(routes)

//------------------------------------------------------------------------------

app.listen(3003, function () {
  console.log("express has started");
})