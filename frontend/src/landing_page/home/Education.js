import React from 'react'

function Education() {
    return ( 
        <div className='container'>
            <div className='row my-5 py-5'>
<div className='col text-center'>
    <img src='media/education.svg' alt="education_image" />
</div>
<div className='col pt-4'>
    <h1 className='fs-2 mb-4 text-body-secondary'>Free and open market education</h1>
    <p className='fs-5 mt-2 text-secondary'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
    <a href='#' className='fs-5' style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
    <p className='fs-5 mt-3 text-secondary'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
    <a href='#' className='fs-5' style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
</div>
            </div>
        </div>
     );
}

export default Education;