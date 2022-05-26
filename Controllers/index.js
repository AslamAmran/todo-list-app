const express = require('express')
const path = require('path')


const app = express()
const port = process.env.BACKEND_PORT || 5000

app.use('/dist', express.static(__dirname + '../../dist/'))
app.use('/ClientApp', express.static(__dirname + '../../ClientApp/'))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../Views/Shared/layout.html'))
})

app.listen(port, () => console.log(`Server is live on ${port}`))
