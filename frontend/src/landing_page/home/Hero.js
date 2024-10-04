import React from 'react'
import {Link} from "react-router-dom"
function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/homeHero.png' alt='hero_image' className='mb-5' />
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link className="text-decoration-none" to="/signup">
      <button className='p-2 mb-5 mt-2 btn btn-primary fs-5' style={{ width: "12rem", margin: "0 auto" }}>Sign up now</button>
      </Link>

            </div>

        </div>
    );
}

export default Hero;