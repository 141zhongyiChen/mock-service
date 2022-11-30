import ApiRouters from './router';
import { runningPort, allowMethods } from './config';

const express = require('express');

const cors = require('cors')

const app = new express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const whitelist = ['https://www.betadcasia.com', 'http://192.168.20.22:3139']
const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true)
  },
  credentials: true,
  methods: allowMethods
}

app.use(cors(corsOptions))

ApiRouters.forEach((router) => {
    app.use(router.prefix, router.file, cors(corsOptions));
})

const server = app.listen(runningPort, 'localhost', () => {
    const { address, port } = server.address()
    console.log(`Server running at http://${address}:${port}`)
})
