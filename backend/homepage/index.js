const express = require('express')
const app = express()
const port = 3000

const routes = require('./src/routes')

app.use(routes)

app.listen(port,()=> console.log(`home on in ${port}`))