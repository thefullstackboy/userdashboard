import React from 'react'
import {Link } from "react-router-dom";
import axios from 'axios'
import { useForm } from "react-hook-form";
const apiUrl = process.env.REACT_APP_REGISTER_URL;

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {     
    try {   
      if(data.password === data.confirmPassword){
      axios.post(`${apiUrl}`,
        {
          email: data.Email,          
          password:data.password       
        }).then((response)=>{
          alert("Account created successfully")
          console.log("response28",response);
          console.log("respone status",response.status)             
        }).catch((error) => { // error is handled in catch block
          if (error.response) { // status code out of the range of 2xx
            alert(error.response.data);           
          } else if (error.request) { // The request was made but no response was received
            console.log(error.request);
          } else {// Error on setting up the request
            console.log('Error', error.message);
          }
        });      
      } 
      else {
        alert("password and confirm password not match.")
      } 
    } catch (e) {
      console.log(e.response.message)
      console.log(e)
    }  
  }  
  return (
    <>    
<div class="login-page">
  <div class="form">  
    <form class="login-form" onSubmit={handleSubmit(onSubmit)}>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address'
       {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}    
    />
      {errors.Email && <p className='text-danger'>* Please check the email id.</p>}

      <input type="password" className="form-control"  placeholder='password'
      {...register("password",
      {required: true})}                               
    />     
     {errors.password && <p className='text-danger'>* minimum one characters</p>}

         <input type="password" className="form-control"  placeholder='confirm password'
     {...register("confirmPassword",
     {required: true})} 
    />
     {errors.confirmPassword && <p className='text-danger'>* minimum one characters</p>}  
      <button type='submit'>Register</button>
    </form>
  </div>   
    <p className='text-center  fs-6  pmt'><Link to="/">Already have an account, Login here</Link></p>  
</div>
    </>
  )
}

export default Register