
const mongoose = require('mongoose')

//define schems

const employeeSchema = new mongoose.Schema({
    //validating prperty
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
phone:{
    type:Number
},
city:{
    type:String
}

})

//model name and schema 
module.exports = mongoose.model("Employee",employeeSchema )