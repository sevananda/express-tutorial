const express = require("express")

const app = express()

const port = 5000

//middleware

const firstHandler = ((req, res, next) => {
    if (10 < 20) {
        next ()
    }
})

const secondHandler = ((req, res, next) => {
    if (10 > 20) {
        next ()
    }else{
        console.log("sorry not allowed")
    }
})

const thirdHandler = ((req, res, next) => {
    if (30 > 20) {
        next ()
    }
})

app.get('/home',firstHandler, (req, res)=> {
    res.send("hello, thsi is home")
})

app.get('/about', secondHandler, (req, res)=> {
    res.send("hello, thsi is about page")
})

app.get('/user/:122', thirdHandler,  (req, res)=> {
    res.send("hello, thsi is 122")
})

app.listen(port, () => {
    console.log("server is running")
})