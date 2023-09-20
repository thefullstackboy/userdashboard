const mongoose = require('mongoose');


const SalesSchema = new mongoose.Schema({
    email :{
      type:String,
      require: true
    },   
    service_name: {
        type:String,
        required: true,       
    },
    current_status: {
        type:String,
        required: false,       
    },  
    date: {
        type:Date,
        required: true,       
    }      
})

const Sales = mongoose.model('Sales',SalesSchema);
module.exports = Sales;

 
