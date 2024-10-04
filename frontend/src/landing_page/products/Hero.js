import React from 'react'
import {Link} from "react-router-dom"
function Hero() {
    return ( 
        <div className='container text-center' style={{marginTop:"8rem"}}>
            <h1 className='fs-2'>Technology</h1>
            <h4 className='fs-4'>Sleek, modern, and intuitive trading platforms</h4>
            <p className='fs-5'>Check out our <Link className='text-decoration-none' to="#">investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link></p>
        </div>
     );
}

export default Hero;