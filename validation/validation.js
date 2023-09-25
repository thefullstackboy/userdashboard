const joi = require("joi");

const priceValidation = (req, res, next) => {
    const schema = joi.object().keys({
        price: joi.number().required(),
    });
  
    // schema options
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };
  
    //from where to get the data
    const body = req.body;
  
    //validate the data
    const { error, value } = schema.validate(body, options);
    if (error) {
      const errorMsgObj = [];
  
      for (const detail of error.details) {
        errorMsgObj.push(detail.message);
      }
  
      return res.status(406).send({
        success: false,
        message: errorMsgObj,       
      });
    }
  
    next();
  };

  const regValidation = (req, res, next) => {
    const schema = joi.object().keys({
      email: joi.string().email({ tlds: { allow: false } }).required(),
      password: joi.string().required()
    });
  
    // schema options
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };
  
    //from where to get the data
    const body = req.body;
  
    //validate the data
    const { error, value } = schema.validate(body, options);
    if (error) {
      const errorMsgObj = [];
  
      for (const detail of error.details) {
        errorMsgObj.push(detail.message);
      }
  
      return res.status(406).send({
        success: false,
        message: errorMsgObj,       
      });
    }
  
    next();
  };


  const loginValidation = (req, res, next) => {
    const schema = joi.object().keys({
      email: joi.string().email({ tlds: { allow: false } }).required(),
      password: joi.string().required()
    });
  
    // schema options
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };
  
    //from where to get the data
    const body = req.body;
  
    //validate the data
    const { error, value } = schema.validate(body, options);
    if (error) {
      const errorMsgObj = [];
  
      for (const detail of error.details) {
        errorMsgObj.push(detail.message);
      }
  
      return res.status(406).send({
        success: false,
        message: errorMsgObj,       
      });
    }
  
    next();
  };

  const forgotPasswordValidation = (req, res, next) => {
    const schema = joi.object().keys({
      email: joi.string().email({ tlds: { allow: false } }).required(),    
    });
  
    // schema options
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };
  
    //from where to get the data
    const body = req.body;
  
    //validate the data
    const { error, value } = schema.validate(body, options);
    if (error) {
      const errorMsgObj = [];
  
      for (const detail of error.details) {
        errorMsgObj.push(detail.message);
      }
  
      return res.status(406).send({
        success: false,
        message: errorMsgObj,       
      });
    }  
    next();
  };

  const resetPasswordValidation = (req, res, next) => {
    const schema = joi.object().keys({
      password: joi.string().required()
    });
  
    // schema options
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };
  
    //from where to get the data
    const body = req.body;
  
    //validate the data
    const { error, value } = schema.validate(body, options);
    if (error) {
      const errorMsgObj = [];
  
      for (const detail of error.details) {
        errorMsgObj.push(detail.message);
      }
  
      return res.status(406).send({
        success: false,
        message: errorMsgObj,       
      });
    }  
    next();
  };

  
  module.exports = {
    priceValidation,
    regValidation,
    loginValidation,
    forgotPasswordValidation,
    resetPasswordValidation
  };
  