const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();
let cors = require('cors');
app.use(cors());
const seedServices = require('./seedServices')
const leadsData = require('./seedLeads')
const salesData = require("./seedSales");
// Import routes
const serviceRoutes = require("./routes/service");

const Service = require('./models/service');
const Leads = require('./models/leads');
const Sales = require('./models/sales');


Service.insertMany(seedServices).then(result => {
  // console.log(result)
})

Leads.insertMany(leadsData).then(result => {
  // console.log(result)
})

Sales.insertMany(salesData).then(result => {
  // console.log(result)
})

mongoose.connect('mongodb://127.0.0.1:27017/userdashboard', {
   useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


  // Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/services", serviceRoutes);    
    
app.listen(3002,()=>{
     console.log("App IS LISTENING ON PORT 3002!")
})    