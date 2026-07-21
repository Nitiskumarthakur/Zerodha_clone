import React from "react";

function Hero(){
    return(
        <div className="container" style={{marginTop:"6rem"}}>
           <div className="text-center mt-5"> 
              <h2 class="fw-medium">Zerodha Products</h2>
              <h3 class="fw-normal text-muted">Sleek, modern, and intuitive trading platforms</h3>
              <p>Check out our <a href="#">investment offerings →</a></p>
           </div>
           <hr style={{marginTop:"10rem",opacity:"0.2"}}/>
        </div>
    )
}

export default Hero;