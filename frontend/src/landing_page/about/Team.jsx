import React from "react";
import { Link } from "react-router-dom"
import { useRef } from "react";
import "./Team.css";

function Team() {

    const nikhil_ref = useRef(null);
    function nikhil_handle(e) {
        e.preventDefault();
        nikhil_ref.current.classList.toggle("fa-angle-down");
        // nikhil_ref.current.classList.toggle("fa-angle-up");
        nikhil_ref.current.classList.toggle("nikhilBio")
    }
    const dr_ref = useRef(null);
    function dr_handle(e) {
        e.preventDefault();
        dr_ref.current.classList.toggle("fa-angle-down");
        dr_ref.current.classList.toggle("fa-angle-up");
        dr_ref.current.classList.toggle("drBio")
    }
    const venu_ref = useRef(null);
    function venu_handle(e) {
        e.preventDefault();
        venu_ref.current.classList.toggle("fa-angle-down");
        venu_ref.current.classList.toggle("fa-angle-up");
        venu_ref.current.classList.toggle("venuBio")
    }

    return (
        <div className="container mt-5">

            <h2 style={{ textAlign: "center", padding: "15px", fontSize: "25px" }}>People</h2>
            <div className="row mt-5" >
                <div className="col-12 col-md-6">
                    <img src="https://zerodha.com/static/images/nithin-kamath.jpg" alt="IMG" style={{ borderRadius: "50%", height: "300px", width: "300px", display: "block", margin: "0 auto" }} />
                    <p style={{ textAlign: "center", marginTop: "15px", }}>Founder, CEO<br></br>Nikhil</p>
                </div>
                <div className="col-12 col-md-6">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <Link to={"/"}>Homepage</Link> / <a href="">TradingQnA </a>/ <a href="">Twitter</a></p>
                </div>
            </div>

            <div className="row  p-2 Team">

                <div className="col-12 col-md-4 mt-5">
                    <img src="https://zerodha.com/static/images/Nikhil.jpg" alt=""/>
                    <div style={{ textAlign: "center", marginTop: "15px", }}>
                        <p className="fw-normal">Nikhil Kamath <br />CO-founder & CFO</p>
                        <div style={{ marginTop: "-20px" }}>
                            <button onClick={nikhil_handle} style={{ marginTop: "-50px" }} >
                                Bio <i ref={nikhil_ref} className="fa-solid fa-angle-down"></i>
                            </button>
                        </div>
                        <div ref={nikhil_ref} className="nikhilBioNone mt-2" style={{ textAlign: "center" }}>
                            <p style={{ textAlign: "start", padding: "0  4rem" }}>
                                Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha.
                                An avid reader, he always appreciates a good game of chess.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4 mt-5">
                    <img src="https://zerodha.com/static/images/Kailash.jpg" alt=""/>
                    <div style={{ textAlign: "center", marginTop: "15px", }}>
                        <p className="fw-normal">Dr. Kailash Nadh <br />CTO</p>
                        <div style={{ marginTop: "-20px" }}>
                            <button onClick={dr_handle} style={{ marginTop: "-50px" }} >
                                Bio <i ref={dr_ref} className="fa-solid fa-angle-down"></i>
                            </button>
                        </div>
                        <div ref={dr_ref} className="drBioNone mt-2" style={{ textAlign: "center" }}>
                            <p style={{ textAlign: "start", padding: "0  4rem" }}>
                                Kailash has a PhD in Artificial Intelligence & Computational Linguistics, 
                                and is the brain behind all our technology and products. He has been a developer 
                                from his adolescence and continues to write code every day.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4 mt-5">
                    <img src="https://zerodha.com/static/images/Venu.jpg" alt=""/>
                    <div style={{ textAlign: "center", marginTop: "15px", }}>
                        <p className="fw-normal">Venu Madhav <br />COO</p>
                        <div style={{ marginTop: "-20px" }}>
                            <button onClick={venu_handle} style={{ marginTop: "-50px" }} >
                                Bio <i ref={venu_ref} className="fa-solid fa-angle-down"></i>
                            </button>
                        </div>
                        <div ref={venu_ref} className="venuBioNone mt-2" style={{ textAlign: "center" }}>
                            <p style={{ textAlign: "start", padding: "0  4rem" }}>
                                Venu is the backbone of Zerodha taking care of operations and ensuring 
                                that we are compliant to rules and regulations. He has over a dozen 
                                certifications in financial markets and is also proficient in technical 
                                analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Team;