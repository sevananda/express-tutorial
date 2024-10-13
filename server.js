// const express = require("express")
// const dotEnv = require('dotenv')
// const { MongoClient } = require("mongodb") // u=it is using mongoclient

// const mongoose = require('mongoose')
// const bodyParser = require('body-parser')


// const app = express()


// dotEnv.config()
// MongoClient.connect(process.env.MONGO_URI)
// .then(()=>{
//     console.log("mongo DB connected sccssfully")
// })

// .catch((error)=>{
//     console.log("error", error)
// })

// const PORT = 5000


// // to access mongolink from .env file
// process.env

// app.listen(PORT, () =>{
//     console.log(`server started running in ${PORT}`)
// })



const express = require("express")
const dotEnv = require('dotenv')
// const { MongoClient } = require("mongodb") // u=it is using mongoclient

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const employeeeRoutes = require('./routes/employeeRoutes')

const app = express()

const PORT = process.env.PORT || 5000



dotEnv.config()

app.use(bodyParser.json())
mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    console.log("Mongo DB connected successfully")
})
.catch((error) => {
    console.log(`${error}`)
})

app.use('/employees', employeeeRoutes)

app.listen(PORT, () => {
    console.log(`server running successfullt at ${PORT} `)
})
