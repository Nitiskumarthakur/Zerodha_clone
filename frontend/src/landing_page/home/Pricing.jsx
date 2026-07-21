import React from "react";
import './Pricing.css';

function Pricing() {
    return (
        <div className="container pricing">
            <h3 className="mt-5">Unbeatable pricing</h3>
            <div className="row">
                <div className="col-12 col-md-4">
                    <p>We pioneered the concept of
                        discount broking and price transparency in India. Flat fees and no hidden
                        charges. <br></br><br></br><a href="#">see pricing <i className="fa-solid fa-arrow-right-long"></i></a>
                    </p>
                    
                </div>

                {/* another section */}

                <div className="col-12 col-md-8">
                    <div className="row">
                        <div className="col-6 col-md-4">
                            <div className="d-flex align-items-center box">
                                <img src="https://zerodha.com/static/images/pricing-eq.svg" className="PrincingImage"/>
                                <p className="ms-2 mb-0 AP">Free account opening</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4">
                            <div className="d-flex align-items-center box">
                                <img src="https://zerodha.com/static/images/pricing-eq.svg" className="PrincingImage"/>
                                <p className="ms-2 mb-0 AP">Free equity delivery and direct mutual funds</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-4">
                            <div className="d-flex align-items-center box">
                                <img src="https://zerodha.com/static/images/other-trades.svg" className="PrincingImage"/>
                                <p className="ms-2 mb-0 AP">Intraday and F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
