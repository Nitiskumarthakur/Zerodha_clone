import React from "react";

function Education(){
    return (
        <div className="container " style={{marginTop:"5rem"}}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src="https://zerodha.com/static/images/index-education.svg" alt="" style={{width:"400px", height:"350px"}}/>
                </div>
                <div className="col-12 col-md-6 mt-4">
                    <h4>Free and open market education</h4>
                    <p className="mt-5">Varsity, the largest online stock market education book 
                        in the world covering everything from the basics to advanced trading.
                        <br></br><br></br><a href="#">versity <i className="fa-solid fa-arrow-right-long"></i></a>
                    </p>
                    <p>TradingQ&A, the most active trading and investment community 
                        in India for all your market related queries.
                        <br></br><br></br><a href="#">Trading Q&A <i className="fa-solid fa-arrow-right-long"></i></a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Education;