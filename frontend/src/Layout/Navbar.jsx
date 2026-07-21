import React, { useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

   //for add class visiable.
   const menuRef = useRef(null);
   function handle(e) {
      e.preventDefault();
      menuRef.current.classList.toggle("menu-menuBtn")
   }



   return (
      <>
         <div className="bg-body-tertiary  border-bottom Navbar">
            <div className="container sticky-top">
               <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                  <div className="container-fluid">
                     <Link to={"/"}><img src="https://zerodha.com/static/images/logo.svg" alt="" /></Link>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="ms-auto gap-2">
                           <ul className="navbar-nav d-flex flex-row gap-4 rightside">
                              <li className="nav-item ">
                                 <Link to={"/signup"} className="nav-link" href="#">Signup</Link>
                              </li>
                              <li className="nav-item">
                                 <Link to={"/about"} className="nav-link " href="#">About</Link>
                              </li>
                              <li className="nav-item">
                                 <Link to={"/products"} className="nav-link">Products</Link>
                              </li>
                              <li className="nav-item">
                                 <Link to={"/pricing"} className="nav-link">Pricing</Link>
                              </li>
                              <li className="nav-item">
                                 <Link to={"/support"} className="nav-link">Support</Link>
                              </li>

                              {/* Menu bar when you click the Menu button */}
                              <li className="nav-item menu">
                                 <button className="navbtn" onClick={handle}><i className="fa-solid fa-bars"></i></button>

                                 <div ref={menuRef} className="mega-menu">

                                    <div className="d-flex justify-content-between">
                                       <Link to="/login">
                                          <div>
                                             <div>
                                                <img style={{ width: "180px", height: "50px", marginLeft: "-30px" }} src="https://zerodha.com/static/images/products/kite-logo.svg" alt="" />
                                             </div>
                                             <p style={{ marginRight: "30px" }}><b>Kite</b><br></br>
                                                Tranding platfrom</p>
                                          </div>
                                       </Link>
                                       <div>
                                          <div>
                                             <img style={{ width: "180px", height: "50px", }} src="https://zerodha.com/static/images/products/console.svg" alt="" />
                                          </div>
                                          <p><b>Console</b><br></br>
                                             Backoffice</p>
                                       </div>
                                       <div>
                                          <div>
                                             <img style={{ width: "180px", height: "50px", }} src="https://zerodha.com/static/images/products/kite-connect.svg" alt="" />
                                          </div>
                                          <p ><b>Kite Connection</b><br></br>Trending APIs</p>
                                       </div>
                                       <div >
                                          <div>
                                             <img style={{ width: "180px", height: "50px", }} src="https://zerodha.com/static/images/products/coin.svg" alt="" />

                                          </div>
                                          <p  ><b>Coin</b><br></br>Mutural funds</p>
                                       </div>
                                    </div>

                                    {/* ------------------- */}

                                    <div className="mega-mamu-blow d-flex gap-5">
                                       <div style={{ marginLeft: "20px" }}>
                                          <h2>Utilities</h2>
                                          <p>Calcuators <br></br>Brokerage calculator <br></br>Margin calculator<br></br>SIP calculator</p>
                                       </div>
                                       <div style={{ marginLeft: "50px" }}>
                                          <h2  >Updates</h2>
                                          <p>Z-connect blog<br></br>Circulars / Bulletin<br></br>IPOs<br></br>Markets</p>
                                       </div>
                                       <div style={{ marginLeft: "50px" }}>
                                          <h2>Education</h2>
                                          <div className="d-flex gap-5">
                                             <div style={{ marginLeft: "10px" }}>
                                                <div>
                                                   <img style={{ width: "35px", height: "30px", }} src="https://zerodha.com/static/images/products/varsity.png" alt="" />
                                                </div>
                                                <p style={{ marginTop: "20px" }}>Versity</p>
                                             </div>
                                             <div style={{ marginLeft: "35px" }}>
                                                <div>
                                                   <img style={{ width: "35px", height: "30px", }} src="https://zerodha.com/static/images/products/tqna.png" alt="" />
                                                </div>
                                                <p style={{ marginTop: "20px" }}>Trading Q&A</p>
                                             </div>
                                          </div>

                                       </div>
                                    </div>

                                 </div>

                              </li>
                           </ul>
                        </form>
                     </div>
                  </div>
               </nav>


            </div>

         </div>
      </>
   )
}

export default Navbar;