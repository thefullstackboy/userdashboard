import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Link } from "react-router-dom";
const apiUrl = process.env.REACT_APP_LEAD_URL;

function Leads() {

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
              <div className='col-md-3 col-lg-2 col-sm-12 col-xl-2 mt-5'>
                  <ul className="list-group">
                    <Link className="list-group-item" aria-current="true" to="/home">Services</Link>
                    <li className="list-group-item mt-3 poco text-white">Leads</li>
                    <Link className="list-group-item mt-3" to="/sales">Sales</Link>
                  </ul>
              </div> 
            
            <div className='col-md-3 col-lg-3 col-sm-3 col-xl-3 mt-5  '>
                {
                    data.map((index)=>{
                        return (
                            <>
                             <p className='border border-primary abe4'  key={index.pk}>{index.email}</p>
                            </>
                        )
                    })
                }                  
            </div>
            <div className='col-md-3 col-lg-3 col-sm-3 col-xl-3 mt-5 '>
            {
                    data.map((index)=>{
                        return (
                            <>
                             <p className='border border-primary abe5' key={index.pk}>{index.service_name}</p>
                            </>
                        )
                    })
                }    
            </div>
            <div className='col-md-3 col-lg-3 col-sm-3 col-xl-3 mt-5 '>
            {
                    data.map((index)=>{
                        return (
                            <>
                             <p className='border border-primary abe6'  key={index.pk}>{index.date}</p>
                            </>
                        )
                    })
                }    
            </div>
            </div>
        </div>      
    </div>
  )
}

export default Leads