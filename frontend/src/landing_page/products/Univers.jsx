import React from "react";
import { Link } from "react-router-dom";

function Univers() {
    return (
        <div className="container">
            <div>
                <h3 class="fw-normal text-muted text-center">Want to know more about our technology stack? Check out the <a href="#">Zerodha.tech</a> blog.</h3>
            </div>
            <div className="text-center mt-4">
                <h2 class="fw-medium">The Zerodha Universe</h2>
                <p className="mt-3">Extend your trading and investment experience even further with our partner platforms</p>
            </div>

            <div className="row mt-5">
                <div className="col-6 col-md-4">
                    <img src="https://zerodha.com/static/images/partners/zerodhafundhouse.png" alt="" style={{width:"50%", height:"18%", display:"block", margin:"0 auto"}}/>
                    <p className="text-normal text-center  p-4">
                        Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className="col-6 col-md-4">
                    <img src="https://zerodha.com/static/images/products/sensibull-logo.svg" alt="" style={{width:"50%", height:"18%", display:"block", margin:"0 auto"}} />
                    <p className="text-normal text-center  p-4">
                        Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col-6 col-md-4">
                    <img src="https://zerodha.com/static/images/partners/tijori.svg" alt="" style={{width:"50%", height:"18%", display:"block", margin:"0 auto"}}/>
                    <p className="text-normal text-center  p-4">
                        Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>
                <div className="col-6 col-md-4">
                    <img src="	https://zerodha.com/static/images/products/streak-logo.png" alt="" style={{width:"35%", height:"18%", display:"block", margin:"0 auto"}} />
                    <p className="text-normal text-center  p-4">
                        Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
                <div className="col-6 col-md-4">
                    <img src="https://zerodha.com/static/images/products/smallcase-logo.png" alt="" style={{width:"40%", height:"18%", display:"block", margin:"0 auto"}}/>
                    <p className="text-normal text-center  p-4">
                        Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col-6 col-md-4">
                    <img src="https://zerodha.com/static/images/products/ditto-logo.png" alt="" style={{width:"40%", height:"18%", display:"block", margin:"0 auto"}}/>
                    <p className="text-normal text-center  p-4">
                        Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                        Sign up for free
                    </p>
                </div>

            </div>

            <div>
                <button style={{ display:"block", margin:"0 auto",width:"204px", height:"44px", color:"#fefefe",backgroundColor:"#387ED1", border:"none", borderRadius:"4px"}}><Link to="/signup" style={{color:"white"}}>Sing up for free</Link></button>
            </div>
        </div>
    )
}

export default Univers; 
