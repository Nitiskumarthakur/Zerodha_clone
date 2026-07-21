import React from "react";

function Brokerage() {
    return (
        <div className="container fw-normal p-5" >
            <div style={{ padding: "100px" }}>
                <h2 className="fw-medium">Charges for account opening</h2>
                <div>
                    <hr />
                    <table class="table table-striped mt-5 p-5">
                        <thead>
                            <tr>

                                <th scope="col" className="fw-medium p-2">Type of account</th>
                                <th scope="col" className="fw-medium p-2">Charges</th>
                            </tr>
                        </thead>
                        <tbody className="m-5">
                            <tr style={{ marginTop: "5rem" }}>
                                <th scope="row" className="fw-light">Individual account</th>
                                <td style={{ color: "green", }}><b>FREE</b></td>

                            </tr>
                            <tr style={{ marginTop: "5rem" }}>
                                <th scope="row" className="fw-light">Minor account</th>
                                <td style={{ color: "green", }}><b>FREE</b></td>

                            </tr>
                            <tr style={{ marginTop: "5rem" }}>
                                <th scope="row" className="fw-light">NRI account</th>
                                <td style={{ color: "green", }}>₹ 500</td>

                            </tr>
                            <tr>
                                <th scope="row" className="fw-light">HUF account</th>
                                <td ><b style={{ color: "green", }}>FREE</b> (online) / ₹ 500 (offline)</td>

                            </tr>
                            <tr>
                                <th scope="row" className="fw-light">Partnership, LLP, and Corporate accounts (offline only)</th>
                                <td>₹ 500</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row">
                <h3 style={{marginBottom:"-50px", marginLeft:"30px"}}>Charges explained</h3>
                <div className="col-12 col-md-6 p-5">
                    <p><b>Securities/Commodities transaction tax</b><br></br>
                        Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
                    </p>
                    <p><b>Transaction/Turnover Charges</b><br></br>
                        Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.

                        <br></br>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)

                        <br></br>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.

                        <br></br>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.

                        <br></br>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
                    </p>
                    <p><b>Call & trades</b><br></br>
                        Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
                        Stamp charges
                        Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
                    </p>
                    <p><b>NRI brokerage charges</b><br></br>
                        &bull; For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).
                        <br></br>&bull; For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
                        <br></br>&bull; ₹500 + GST as yearly account maintenance charges (AMC) charges.
                    </p>
                    <p><b>Account with debit balance</b>
                        If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                    <p><b>Charges for Investor's Protection Fund Trust (IPFT) by NSE</b><br></br>

                        &bull; Equity and Futures - ₹0.01 per crore + GST of the traded value.<br></br>
                        &bull; Options - ₹0.01 per crore + GST traded value (premium value).<br></br>
                        &bull; Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</p>
                    <p><b>Margin Trading Facility (MTF)</b>

                        <br></br> &bull;  MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.
                        &bull; MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.<br></br>
                        &bull; MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</p>
                    <p></p>
                </div>
                <div className="col-12 col-md-6 p-5">
                    <p><b>GST</b><br></br>
                        Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)
                    </p>
                    <p><b>SEBI Charges</b><br></br>
                        Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
                    </p>
                    <p><b>DP (Depository participant) charges</b><br></br>
                        ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.
                        <br></br>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.

                        <br></br>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
                    </p>
                    <p><b>Pledging charges</b><br></br>₹30 + GST per pledge request per ISIN. </p>
                    <p><b>AMC (Account maintenance charges)</b><br></br> 
                       Free for the first year on all new resident individual accounts.<br></br>
                       For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here
                        <br></br>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here
                    </p>

                    <p><b>Corporate action order charges</b><br></br> 
                       ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.
                    </p>
                    <p><b>Off-market transfer charges</b><br></br>
                       ₹25 per transaction. 
                    </p>

                    <p><b>Physical CMR request</b><br></br>
                       First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.
                    </p>
                    <p><b>Payment gateway charges</b>
                       ₹9 + GST (Not levied on transfers done via UPI)
                    </p>
                    <p><b>Delayed Payment Charges</b><br></br>
                       Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.</p>
                    <p><b>Trading using 3-in-1 account with block functionality</b><br></br>
                       Delivery & MTF Brokerage: 0.5% per executed order.<br></br>
                       Intraday Brokerage: 0.05% per executed order.
                    </p>
                </div>
            </div>

            <section>
                <p><b>Disclaimer</b><br></br><br></br> 
                    For Delivery based trades, a minimum of ₹0.01 will be charged per 
                    contract note. Clients who opt to receive physical contract notes will be charged ₹20 per 
                    contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI 
                    and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage 
                    is also charged on expired, exercised, and assigned options contracts. Free investments are 
                    available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs 
                    need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the 
                    contract value will be charged for contracts where physical delivery happens. For netted off 
                    positions in physically settled contracts, a brokerage of 0.1% will be charged.
                </p>
            </section>
            
        </div>
    )
}

export default Brokerage;