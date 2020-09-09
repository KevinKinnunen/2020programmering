//npm init -y 
//npm i express

const express = require('express')
const app = express()
const port = 3000
const clientDir = __dirname + '\\client\\'

app.get('/', (req, res) => res.sendFile(clientDir + 'index.html'))
app.get('/mainStyle', (req, res) => res.sendFile(clientDir + 'style.css'))
app.get('/kanin.jpg', (req, res) => res.sendFile(clientDir + 'kanin.jpg'))
app.listen(port, () => console.log(`Example app listening on port! ${port}`))