import React from 'react'
import {Link } from "react-router-dom";
import './form.css';
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
const apiUrl = process.env.REACT_APP_LOGIN_URL;

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async(data) => {     
    try {
      const response = await fetch(`${apiUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: data.Email, password:data.password}),
      });

      if (response.ok) {
        // Login was successful, handle the response accordingly
        const data = await response.json();
        console.log("##",data)
        localStorage.setItem("token",data.token);
        alert("login successful");
        navigate("/home")
      } else {
        // Handle login error here
        alert('email id and password not match');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };
  return (
    <> 
<div class="login-page">
  <div class="form">  
  <h1 className='text-center text-white'>User login</h1>
    <form class="login-form mt-3" onSubmit={handleSubmit(onSubmit)}>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address'
       {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}    
    />
      {errors.Email && <p className='text-white'>* Please check the email id.</p>}
      <input type="password" className="form-control"  placeholder='password'
      {...register("password",
      {required: true})}                               
    /> 
     {errors.password && <p className='text-white'>* minimum one characters</p>}   
      <button type='submit'>login</button>
      <p className='text-center  fs-6 mt-3'><Link to="/forgot-password" className='text-white'>Forgot your password</Link></p>
    </form>
  </div>   
    <p className='text-center  fs-6  pmt'><Link to="/register">Don't  have a account, Create here Register</Link></p>  
</div>
    </>
  )
}

export default Login