const express = require('express');

// 引入路由中间件
const clientRouter = require('./mock/clients')

const app = new express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/client', clientRouter)

const server = app.listen(8000, 'localhost', () => {
    const { address, port } = server.address()
    console.log(`Server running at http://${address}:${port}`)
})

app.get('/', (req, res) => {
    res.send('Hellow Mock!')
})