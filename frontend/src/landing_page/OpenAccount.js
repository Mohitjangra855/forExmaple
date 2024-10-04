import React from 'react'
import {Link} from "react-router-dom"
function OpenAccount() {
    return ( 
        <div className='container text-center my-4 py-4'>
            <h1 className='mb-4 text-body-secondary'>Open a Zerodha account</h1>
            <p className='mb-4 fs-5 text-secondary'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
           <Link to="/signup"><button className='p-2 btn btn-primary fs-5 my-3' style={{ width: "16rem", margin: "0 auto" }}>Sign up now</button></Link> 
        </div>      
     );
}

export default OpenAccount;