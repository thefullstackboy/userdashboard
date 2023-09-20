import React from 'react'
import {Link } from "react-router-dom";
import axios from 'axios'
import { useForm } from "react-hook-form";
import './form.css';
const apiUrl = process.env.REACT_APP_FORGOT_PASSWORD_URL;


function ForgotPassword() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {     
    try {   

      axios.post(apiUrl,
        {
          email: data.Email,                     
        }).then((response)=>{
          alert("Email send")
          console.log("response28",response);
          console.log("respone status",response.status)             
        }).catch((error) => { // error is handled in catch block
          if (error.response) { // status code out of the range of 2xx
            alert("This email id not registered.");           
          } else if (error.request) { // The request was made but no response was received
            alert(error.request);
          } else {// Error on setting up the request
            alert('Error', error.message);
          }
        });    
    } catch (e) {
      console.log(e.response.message)
      console.log(e)
    }  
  } 
  return (
    <div>
<div class="login-page">
  <div class="form">  
    <form class="login-form" onSubmit={handleSubmit(onSubmit)}>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address'
       {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}    
    />
      {errors.Email && <p className='text-danger'>* Please check the email id.</p>}
      
   
      <button type="submit">Reset Password</button>
    </form>
  </div>   
    <p className='text-center  fs-6  pmt'><Link to="/">Already have an account, Login here</Link></p>  
</div>
    </div>
  )
}

export default ForgotPassword