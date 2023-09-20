const mongoose = require('mongoose');


const serviceSchema = new mongoose.Schema({
    service_name :{
      type:String,
      require: true
    },
    price: {
        type:Number,
        required: false,
        min : 0
    }   
})

const Service = mongoose.model('Service',serviceSchema);
module.exports = Service;

 
