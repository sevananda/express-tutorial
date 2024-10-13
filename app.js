
// creating a server

console.log("welcome to express JS")
const express = require('express')

const app = express()

const port = 5000

app.get('/apple', (req, res) => {
    res.send("apple s red color")
})

app.listen(port, () => {
    console.log("server started")
})