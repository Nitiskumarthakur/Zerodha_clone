import React from "react";
import './Hero.css';

function Hero() {
    return (

        <div className="container pt-5">
            <div className="d-flex justify-content-between p-2">
                <h3>Support Portal</h3>
                <button className="ticketBtn">My tickets</button>
            </div>
            <div className="support_inp">
                <input type="text" placeholder="🔍  Eg:How do I open my account, How do i activate F&O..." />
            </div>

            <div className="row mt-5">
                {/* Accordion */}
                <div className="col-12 col-md-8">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item border border-light-subtle mt-5">
                            <h2 className="accordion-header d-flex"><i className="fa-solid fa-circle-plus  p-3" style={{ width: "70px", backgroundColor: "#e7eef5", color: "#387ED1" }}></i>
                                <button className="accordion-button collapsed fs-5 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Account Opening
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Resident individual</li>
                                        <li>Resident individual</li>
                                        <li>Minor</li>
                                        <li>Non Resident Indian (NRI)</li>
                                        <li>Company, Partnership, HUF and LLP</li>
                                        <li>Glossary</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item border border-light-subtle mt-4">
                            <h2 className="accordion-header d-flex"><i className="fa-regular fa-circle-user  p-3" style={{ width: "70px", backgroundColor: "#e7eef5", color: "#387ED1" }}></i>
                                <button className="accordion-button collapsed fs-5 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Your Zerodha Account
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Your Profile</li>
                                        <li>Account modification</li>
                                        <li>Client Master Report (CMR) and Depository Participant (DP)</li>
                                        <li>Nomination</li>
                                        <li>Transfer and conversion of securities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item  border border-light-subtle mt-4">
                            <h2 className="accordion-header d-flex"><i class="fa-brands fa-uikit p-3" style={{ width: "70px", backgroundColor: "#e7eef5", color: "#387ED1" }}></i>
                                <button className="accordion-button collapsed fs-5 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Kite
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>IPO</li>
                                        <li>Trading FAQs</li>
                                        <li>Margin Trading Facility (MTF) and Margins</li>
                                        <li>Charts and orders</li>
                                        <li>Alerts and Nudges</li>
                                        <li>General</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item  border border-light-subtle mt-4">
                            <h2 className="accordion-header d-flex"><i class="fa-solid fa-indian-rupee-sign p-3" style={{ width: "70px", backgroundColor: "#e7eef5", color: "#387ED1" }}></i>
                                <button className="accordion-button collapsed fs-5 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Funds
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Add money</li>
                                        <li>Withdraw money</li>
                                        <li>Add bank accounts</li>
                                        <li>eMandates</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item  border border-light-subtle mt-4">
                            <h2 className="accordion-header d-flex"><i className="fa-solid fa-terminal  p-3" style={{ width: "70px", backgroundColor: "#e7eef5", color: "#387ED1" }}></i>
                                <button className="accordion-button collapsed fs-5 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Console
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Portfolio</li>
                                        <li>Corporate actions</li>
                                        <li>Funds statement</li>
                                        <li>Reports</li>
                                        <li>Profile</li>
                                        <li>Segments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item  border border-light-subtle mt-4">
                            <h2 className="accordion-header d-flex"><i class="fa-solid fa-spinner p-3" style={{ width: "70px", backgroundColor: "#e7eef5", color: "#387ED1" }}></i>
                                <button className="accordion-button collapsed fs-5 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    Coins
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>Mutual funds</li>
                                        <li>National Pension Scheme (NPS)</li>
                                        <li>Fixed Deposit (FD)</li>
                                        <li>Features on Coin</li>
                                        <li>Payments and Orders</li>
                                        <li>General</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 
                 {/* Right section */}
                <div className="col-12 col-md-4">
                    <div className="supportOL">
                        <a href="">
                            <ol>
                                <li>
                                    Rights Entitlements listing in July 2026
                                </li>
                                <li className="mt-3">
                                    Current Takeovers and Delisting – July 2026
                                </li>
                            </ol>
                        </a>
                    </div>
                    <div className="supportPLast">
                        <h3 className="border border-light-subtle">Quick links</h3>
                        <div className="mt-5">
                            <p className="border border-light-subtle" >1. Track account opening </p>
                            <p className="border border-light-subtle">2. Track segment activation </p>
                            <p className="border border-light-subtle">3. Intraday margins</p>
                            <p className="border border-light-subtle">4. Kite user manual</p>
                            <p className="border border-light-subtle">5. Learn how to create a ticket</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Hero;