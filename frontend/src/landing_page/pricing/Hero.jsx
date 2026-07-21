import React from "react";
import { useState } from "react";
import "./hero.css";

function Hero() {

    const [activeTab, setActiveTab] = useState("equity");

    console.log(activeTab);

    // function handle(e) {
    //     e.preventDefault()
    //     setActive(prev => prev + 1)
    // }

    return (
        <div className="container" style={{ marginTop: "5rem" }}>
            <div className="text-center mt-4">
                <h2 class="fw-medium">Charges</h2>
                <h3 class="fw-normal text-muted">List of all charges and taxes</h3>
            </div>
            <div className="row mt-5">
                <div className="col-6 col-md-4 p-5 text-center">
                    <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="" />
                    <h2 className="fw-medium">Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-6 col-md-4 p-5 text-center">
                    <img src="https://zerodha.com/static/images/other-trades.svg" alt="" />
                    <h2 className="fw-medium">Intraday and F&O trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-6 col-md-4 p-5 text-center">
                    <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="" />
                    <h2 className="fw-medium">Free direct MF</h2>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>

            {/* tabsection */}

            <div className="tab">
                <div className="">
                    <button className={activeTab === "equity" ? "ActiveBtn" : "tabs"} onClick={() => setActiveTab("equity")}>
                        Equity
                    </button>

                    <button className={activeTab === "currency" ? "ActiveBtn" : "tabs"} onClick={() => setActiveTab("currency")}>
                        Currency
                    </button>

                    <button className={activeTab === "commodity" ? "ActiveBtn" : "tabs"} onClick={() => setActiveTab("commodity")}>
                        Commodity
                    </button>
                </div>
                <  hr className="hr" />
            </div>
             

            <div className={activeTab === "equity" ? "equity" : "equityHide"} >
                <table class="table table-striped text-center ">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col" className="fw-medium p-2">Equity delivery</th>
                            <th scope="col" className="fw-medium p-2">Equity intraday</th>
                            <th scope="col" className="fw-medium p-2">F&O - Futures</th>
                            <th scope="col" className="fw-medium p-2">F&O - Options</th>
                        </tr>
                    </thead>
                    <tbody className="m-5">
                        <tr style={{marginTop:"5rem"}}>
                            <th scope="row" className="fw-light">Brokerage</th>
                            <td>Zero Brokerage</td>
                            <td>0.03% or Rs. 20/executed order whichever is lower</td>
                            <td>0.03% or Rs. 20/executed order whichever is lower</td>
                            <td>Flat Rs. 20 per executed order</td>
                        </tr>
                        <tr>
                            <th scope="row" className="fw-light">STT/CTT</th>
                            <td>0.1% on buy & sell</td>
                            <td>0.025% on the sell side</td>
                            <td>0.05% on the sell side</td>
                            <td>
                                <ul>
                                    <li>0.15% of the intrinsic value on options that are bought and exercised</li>
                                    <li>0.15% on sell side (on premium)</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="fw-light">Transaction charges</th>
                            <td>NSE: 0.00307% <br></br>BSE:0.00375%</td>
                            <td>NSE: 0.00307% <br></br>BSE:0.00375%</td>
                            <td>NSE: 0.00183% BSE: 0</td>
                            <td>NSE: 0.03553% (on premium)BSE: 0.0325% (on premium)</td>
                        </tr>
                        <tr>
                            <th scope="row" className="fw-light">GST</th>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        </tr>
                        <tr>
                            <th scope="row" className="fw-light">SEBI charges</th>
                            <td>₹10 / crore</td>
                            <td>₹10 / crore</td>
                            <td>₹10 / crore</td>
                            <td>₹10 / crore</td>
                        </tr>
                        <tr>
                            <th scope="row" className="fw-light">Stamp charges</th>
                            <td>0.015% or ₹1500 / crore on buy side</td>
                            <td>0.003% or ₹300 / crore on buy side</td>
                            <td>0.002% or ₹200 / crore on buy side</td>
                            <td>0.003% or ₹300 / crore on buy side</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={activeTab === "currency" ? "Currency" : "CurrencyHide"} >
                <table class="table table-striped text-center ">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col" className="fw-medium p-2">Currency futures</th>
                            <th scope="col" className="fw-medium p-2">Currency options</th>
                        </tr>
                    </thead>
                    <tbody className="m-5">
                        <tr style={{marginTop:"5rem"}}>
                            <th scope="row" className="fw-light">Brokerage</th>
                            <td>0.03% or ₹ 20/executed order whichever is lower</td>
                            <td>₹ 20/executed order</td>
                        </tr>
                        <tr>
                            <th scope="row" className="fw-light">STT/CTT</th>
                            <td>No STT</td>
                            <td>No STT</td>
                        </tr>
                        <tr>
                            <th scope="row" className="fw-light">Transaction charges</th>
                            <td>NSE: 0.00035% <br></br>BSE: 0.00045%</td>
                            <td>NSE: 0.0311% <br></br>BSE:0.00371%</td>
                            
                        </tr>
                        <tr>
                            <th scope="row" className="fw-light">GST</th>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            
                        </tr>
                        <tr>
                            <th scope="row" className="fw-light">SEBI charges</th>
                            <td>₹10 / crore</td>
                            <td>₹10 / crore</td>
                        </tr>
                        <tr>
                            <th scope="row" className="fw-light">Stamp charges</th>
                            <td>0.0001% or ₹10 / crore on buy side</td>
                            <td>0.0001% or ₹10 / crore on buy side</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={activeTab === "commodity" ? "commodity" : "commodityHide"} >
                <table class="table table-striped text-center ">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col" className="fw-medium p-2">Currency futures</th>
                            <th scope="col" className="fw-medium p-2">Currency options</th>
                        </tr>
                    </thead>
                    <tbody className="m-5">
                        <tr style={{marginTop:"5rem"}}>
                            <th scope="row" className="fw-light">Brokerage</th>
                            <td>0.03% or Rs. 20/executed order whichever is lower</td>
                            <td>₹ 20/executed order</td>
                        </tr>
                        <tr>
                            <th scope="row" className="fw-light">STT/CTT</th>
                            <td>0.01% on sell side (Non-Agri)</td>
                            <td>0.05% on sell side</td>
                        </tr>
                        <tr>
                            <th scope="row" className="fw-light">Transaction charges</th>
                            <td>MCX: 0.0021% <br></br>NSE: 0.0001%</td>
                            <td>MCX: 0.0418% <br></br>NSE: 0.001%</td>
                            
                        </tr>
                        <tr>
                            <th scope="row" className="fw-light">GST</th>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            
                        </tr>
                        <tr>
                            <th scope="row" className="fw-light">SEBI charges</th>
                            <td>Agri:<br></br> ₹1 / crore<br></br> Non-agri:<br></br> ₹10 / crore</td>
                            <td>₹10 / crore</td>
                        </tr>
                        <tr>
                            <th scope="row" className="fw-light">Stamp charges</th>
                            <td>0.0001% or ₹200 / crore on buy side</td>
                            <td>0.003% or ₹300 / crore on buy side</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <h3 style={{textAlign:"center", marginTop:"2rem", fontSize:"19px", color:"#666666"}}><a href="">Calculate your costs upfront</a> using our brokerage calculator</h3>
            
            
        
        </div>
    )
}

export default Hero;