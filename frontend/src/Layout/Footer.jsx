import React from "react";
import './footer.css';

function Footer() {
    return (
        <div style={{backgroundColor:"#FBFBFB", marginTop:"5rem"}}>
            <hr />
            <div className="container footer">
                <div className="row listofParagraph">
                    <div className="col-6 col-md-3 fw-light ">
                        <img className="m-2" src="https://zerodha.com/static/images/logo.svg" alt="" style={{ width: "40%" }} />
                        <p>© 2010 - 2026, Zerodha Broking Ltd. All rights reserved.</p>
                        <p style={{ marginBottom: "-12px", marginTop: "-15px" }}><i className="fa-brands fa-x-twitter"></i> &nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa-brands fa-square-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-brands fa-linkedin"></i></p>
                        <hr />
                        <p><i className="fa-brands fa-youtube"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-brands fa-telegram"></i></p>
                        <div>
                            <a href=""><img src="https://zerodha.com/static/images/google-play-badge-light.svg" alt="" style={{ width: "40%" }} /></a>
                            &nbsp;&nbsp;<a href=""><img src="https://zerodha.com/static/images/appstore-badge-light.svg" alt="" style={{ width: "40%" }} /></a>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 fw-normal">
                        <h1 className="pb-2 m-2">Account</h1>
                        <p className="m-2"><a href="#">Open demat Account</a></p>
                        <p className="m-2"><a href="#">Minor demat account</a></p>
                        <p className="m-2"><a href="#">NRI demat account</a></p>
                        <p className="m-2"><a href="#">HUF demat account</a></p>
                        <p className="m-2"><a href="#">Commodity</a></p>
                        <p className="m-2"><a href="#">Dematerialisation</a></p>
                        <p className="m-2"><a href="#">Fund transfer</a></p>
                        <p className="m-2"><a href="#">MTF</a></p>
                    </div>
                    <div className="col-4 col-md-2">
                        <h1 className="pb-2 m-2">Support</h1>
                        <p className="m-2"><a href="#">Contact us</a></p>
                        <p className="m-2"><a href="#">support portal</a></p>
                        <p className="m-2"><a href="#">How to file a complaint?</a></p>
                        <p className="m-2"><a href="#">Status of your complaints</a></p>
                        <p className="m-2"><a href="#">Bulletin</a></p>
                        <p className="m-2"><a href="#">Circular</a></p>
                        <p className="m-2"><a href="#">Z-Connect blog</a></p>
                        <p className="m-2"><a href="#">Downloads</a></p>
                    </div>
                    <div className="col-4 col-md-2">
                        <h1 className="pb-2 m-2">Company</h1>
                        <p className="m-2"><a href="#">About</a></p>
                        <p className="m-2"><a href="#">Philosophy</a></p>
                        <p className="m-2"><a href="#">Press & media</a></p>
                        <p className="m-2"><a href="#">Careers</a></p>
                        <p className="m-2"><a href="#">Zerodha.tech</a></p>
                        <p className="m-2"><a href="#">Open source</a></p>
                        <p className="m-2"><a href="#">Referral program</a></p>
                    </div>
                    <div className="col-4 col-md-2">
                        <h1 className="pb-2 m-2">Quick links</h1>
                        <p className="m-2"><a href="#">Upcoming IPOs</a></p>
                        <p className="m-2"><a href="#">Brokerage charges</a></p>
                        <p className="m-2"><a href="#">Market holidays</a></p>
                        <p className="m-2"><a href="#">Economic calender</a></p>
                        <p className="m-2"><a href="#">Calculators</a></p>
                        <p className="m-2"><a href="#">Markets</a></p>
                        <p className="m-2"><a href="#">Sectors</a></p>
                        <p className="m-2"><a href="#">Gift Nifty</a></p>
                    </div>
                </div>

                <div className="lastParagraph m-2">

                    <p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="">complaints@zerodha.com</a>, for DP related to <a href="">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p style={{ marginTop: "-25px" }}>Procedure to file a complaint on <a href="">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <p style={{ marginTop: "-25px" }}><a href="">Smart Online Dispute Resolution</a> | <a href="">Grievances Redressal Mechanism</a></p>
                    <p style={{ marginTop: "-25px" }}>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p style={{ marginTop: "-25px" }}>Attention investors: 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2. Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3. Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                    <p style={{ marginTop: "-25px" }}>India's largest broker based on networth as per NSE. <a href="">NSE broker factsheet</a></p>
                    <p style={{ marginTop: "-25px" }}>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you
                        need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="">create a ticket here</a>.
                    </p>
                    <p style={{ marginTop: "-25px" }}>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
                    <p style={{ marginTop: "-25px" }}>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>

                </div>

                <div className="aboutFooter">
                    <p><a href="">NCE</a></p>
                    <p><a href="">BSE</a></p>
                    <p><a href="">MCX</a></p>
                    <p><a href="">MESI</a></p>
                    <p><a href="">Terms & Condition</a></p>
                    <p><a href="">Policies & procedures</a></p>
                    <p><a href="">Privacy policy</a></p>
                    <p><a href="">Disclosure</a></p>
                    <p><a href="">For investor's attention </a></p>
                    <p><a href="">Investor charter</a> </p>
                    <p><a href="">Sitemap</a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;