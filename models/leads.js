const mongoose = require('mongoose');


const LeadsSchema = new mongoose.Schema({
    email :{
      type:String,
      require: true
    },   
    service_name: {
        type:String,
        required: true,       
    },
    date: {
        type:Date,
        required: true,       
    },      
})

const Leads = mongoose.model('Leads',LeadsSchema);
module.exports = Leads;

 
