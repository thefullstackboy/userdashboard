const Service = require('../models/service');
const Leads = require('../models/leads');
const Sales =  require('../models/leads');
const Register = require('../models/register');
let bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");

// Get list
const serviceList = async(req,res,next)=> {
    try {
        const products = await Service.find();
        res.json(products);
      } catch (error) {
        res.json({ message: error });
      }
      next()
}

const leadsList = async(req,res,next)=> {
  try {
      const products = await Leads.find();
      res.json(products);
    } catch (error) {
      res.json({ message: error });
    }
    next()
}

const salesList = async(req,res,next)=> {
  try {
      const products = await Sales.find();
      res.json(products);
    } catch (error) {
      res.json({ message: error });
    }
    next()
}

// Update price
const price_update = async (req, res, next) => {
    try {
        const product = {      
          price: req.body.price,      
        };
    
        const updatedProduct = await Service.findByIdAndUpdate(
          { _id: req.params.productId },
          product
        );
        res.json(updatedProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

const registerForm = async(req, res, next) => {
try {
  

const email = req.body.email;
let password = req.body.password;

const oldUser = await Register.findOne({ email });
  if (oldUser) {
    return res.status(409).send("User Already Exist. Please Login");
  }

password = await bcrypt.hash(password, 10);

  const data = new Register({
    email: email,
    password: password
})



  const dataToSave = await data.save();
  res.status(200).json(dataToSave)
}
  catch (error) {
      res.status(400).json({message: error.message})    
  }
}

const loginForm = async(req, res, next) => {
  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;   
     const user = await Register.findOne({ email });   
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "1h",
        }
      );
      // save user token
      user.token = token;
      // user
      res.status(200).send({"token":user.token});     
    }
    else {
      res.status(404).send({message:"login id or password not match"});
    }
  } catch (err) {
    res.status(400).send("Invalid Credentials");
    console.log(err);
  }
  }

const forgotPassword = async(req, res, next) => {
// email config
const {email} = req.body;
Register.findOne({email: email})
.then(user => {
    if(!user) {
        return res.status(404).send({Status: "User not existed"})
    } 
    const token = jwt.sign({id: user._id},process.env.TOKEN_KEY, {expiresIn: "120s"})  
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_PASSWORD
        }
      });
      
      var mailOptions = {
        from: 'deepaksewani03@gmail.com',
        to: email,
        subject: 'Reset Password Link',
        text: `This link valid only 2 minutes http://localhost:3003/reset_password/${user._id}/${token}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          return res.send({Status: "Success"})
        }
      });
}) 
}

  const restPassword = async(req, res, next)=> {
    const {id, token} = req.params
    const {password} = req.body
    console.log("id",id)
    console.log("password",password)

    jwt.verify(token,process.env.TOKEN_KEY, (err, decoded) => {
        if(err) {
            return res.json({Status: "Error with token"})
        } else {
            bcrypt.hash(password, 10)
            .then(hash => {
                Register.findByIdAndUpdate({_id: id}, {password: hash})
                .then(u => res.send({Status: "Success"}))
                .catch(err => res.send({Status: err}))
            })
            .catch(err => res.send({Status: err}))
        }
    })
  }
module.exports = {
    serviceList,
    price_update,
    leadsList,
    salesList,
    registerForm,
    loginForm,
    forgotPassword,  
    restPassword   
  }