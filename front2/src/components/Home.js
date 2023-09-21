import {Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token)
const headers = {
'Authorization': `Bearer ${token}`,
'Content-Type': 'application/json',
};
  axios.get(`${apiUrl}`,{headers})
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div>        
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-3 col-lg-3 col-sm-12 col-xl-3 mt-5'>
                  <ul className="list-group">
                    <li className="list-group-item poco text-white" aria-current="true">Services</li>
                    <Link className="list-group-item mt-3" to="/leads">Leads</Link>
                    <Link className="list-group-item mt-3" to="/sales">Sales</Link>
                  </ul>
              </div> 

              <div className='col-md-9 col-lg-9 col-sm-12 col-xl-9 mt-5'>
       
                {data.map(item => (
                  <>
                         <label className="container" >
  <input type="checkbox" />
  <span className="checkmark" ></span>
</label>
                <span className='border border-primary box'>
                <div className="row g-3 align-items-center">
  <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label" key={item._id}>{item.service_name}</label>
    <input type="number" id="inputPassword6" className="form-control" value={item.price} aria-describedby="passwordHelpInline"/>
  </div>
  <div className="col-auto">
    <span id="passwordHelpInline text-right" className="form-text">

    </span>
  </div>
</div>       
          </span>
          <button type="button" className="btn btn-primary poco">Update</button> 
                  </>

        ))}
               
               
              </div>
            </div>   
          </div>     
    </div>
  )
}

export default Home
