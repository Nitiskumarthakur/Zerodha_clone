import React from 'react';
import './hero.css';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className='container p-10 mt-2'>
      <div className='row hero1'>
        <img src="https://zerodha.com/static/images/landing.svg" alt="heroImage" className='heroImage mt-5'/>
        <h1 className='text-center'>Invest in everything</h1>
        <p className='text-center fw-normal'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='mt-3 mb-5'><Link to="/signup" style={{color:"white"}}>Sing up for free</Link></button>  
      </div>
    </div>
  )
}

export default Hero;
