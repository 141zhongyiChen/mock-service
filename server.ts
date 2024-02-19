import ApiRouters from './router';
import { runningPort, allowMethods } from './config';

const express = require('express');

const cors = require('cors')

const app = new express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const whitelist = [/betafollowme.com/, /192.168./]
const corsOptions = {
  origin: whitelist,
  methods: allowMethods,
  allowedHeaders: 'Content-Type, Accept',
  maxAge: 1728000,
  credentials: true
}

app.use(cors(corsOptions))

ApiRouters.forEach((router) => {
    app.use(router.prefix, router.file);
})

const server = app.listen(runningPort, 'localhost', () => {
    const { port } = server.address()
    console.log(`Server running at http://localhost:${port}`)
})
