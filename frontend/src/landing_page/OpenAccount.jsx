import React from "react";
import './openAccount.css';
import { Link } from "react-router-dom";

function OpenAccount() {
    return (
        <div className="container openA">
            <div className="text-center">
                <h1>Open a Zerodha account</h1>
                <p className="mt-3">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className="openABtn"><Link to="/signup" style={{color:"white"}}>Sing up for free</Link></button>
            </div>
        </div>
    )
}

export default OpenAccount;

