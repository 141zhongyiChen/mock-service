import ApiRouters from './router';
import { runningPort } from './config';

const express = require('express');

const cors = require('cors')

const app = new express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// const whiteList = ['http://192.168.43.186:3099']
const options = {
    origin: (origin, callback) => {
        callback(null, true)
      },
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}

app.use(cors(options))

ApiRouters.forEach((router) => {
    app.use(router.prefix, router.file);
})

const server = app.listen(runningPort, 'localhost', () => {
    const { address, port } = server.address()
    console.log(`Server running at http://${address}:${port}`)
})
