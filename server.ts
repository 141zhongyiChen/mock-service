import ApiRouters from './router';
import { runningPort } from './config';

const express = require('express');

const cors = require('cors')

const app = new express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

ApiRouters.forEach((router) => {
    app.use(router.prefix, router.file);
})

const server = app.listen(runningPort, 'localhost', () => {
    const { address, port } = server.address()
    console.log(`Server running at http://${address}:${port}`)
})

app.get('/', (req, res) => {
    res.send('Hellow Mock!')
})