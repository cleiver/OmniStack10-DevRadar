const http = require('http')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

//------------------------------------------------------------------------------

const { setupWebsocket } = require('./websocket')

const app = express()

// utilizamos o server fora do express por causa do websocket
const server = http.Server(app)
setupWebsocket(server)

mongoose.connect('mongodb://localhost:27017/devmap', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

//------------------------------------------------------------------------------

const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(routes)

//------------------------------------------------------------------------------

server.listen(3003, function () {
  console.log("express has started");
})