import React from 'react'
function Awards() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-sm-2'>
                    <img src='media/largestBroker.svg' alt='award_img' />
                </div>
                <div className='col-lg-6 col-sm-2 pt-5'>

                    <h1>Largest Stock Broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
        <ul className='row mt-3' >
            
            <li className='col-6 mb-1'>
                <p>Future and Options</p>
            </li>
            <li className='col-6 mb-1'>
                <p>
                    Commodity derivaties</p>
            </li>
            <li className='col-6 mb-1'>
                <p>Currency derivatives</p>
            </li>
            <li className='col-6 mb-1'>
                <p>Stocks & IPOs</p>
            </li>
            <li className='col-6 mb-1'>
                <p>Direct mutual funds</p>
            </li>
            <li className='col-6 mb-1'>
                <p>Bonds and Govt. Securities</p>
            </li>
        </ul>
        <img src='media/pressLogos.png' alt='awardsImg2' className='mt-1' style={{width:"90%"}} />
                </div>

            </div>

        </div>
    );
}

export default Awards;