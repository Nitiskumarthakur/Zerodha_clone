import React from "react";
import "./Awards.css";

function Awards() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-5 forphone">
                        <h3 className="mb-5">Trust with confidence</h3>
                        <h4 >Customer-first always</h4>
                        <p className="fw-normal">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s
                            largest broker; contributing to 15% of daily retail exchange volumes in India.
                        </p>
                        <h4>No spam or gimmicks</h4>
                        <p className="fw-normal">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at
                            your pace, the way you like. <a href="#">Our philosophies.</a>
                        </p>
                        <h4>The Zerodha universe</h4>
                        <p className="fw-normal">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        <h4>Do better with money</h4>
                        <p>With initiatives like <a href="#">Nudge</a> and <a href="#">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                    <div className="col-md-7 col-12 phone-A-Img">
                        <img src="https://zerodha.com/static/images/ecosystem.png" alt="" className="AwardImage"/>
                        <div className="blow-p">
                            <p><a href="#">Explore our Product <i className="fa-solid fa-arrow-right-long"></i></a></p>
                            <p><a href="#">Try kite demo <i className="fa-solid fa-arrow-right-long"></i></a></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* like the border section */}

            <div className="likeBorder mt-5">
                <div>
                    <img src="https://zerodha.com/static/images/kc-logo-landing.svg" alt="" />
                </div>
                <div>
                    <p className="fw-normal">Need more? Build your own trading and investing experience with Kite Connect,
                        simple HTTP APIs to place orders, stream market data, manage your account,
                        and more <a href="#">Explore<i className="fa-solid fa-arrow-right-long"></i></a>
                    </p>
                </div>
                <div className="phone-A-border-img">
                    <img src="https://zerodha.com/static/images/kc-banner-image.svg" alt="" />
                </div>
            </div>
        </>
    );
}

export default Awards;