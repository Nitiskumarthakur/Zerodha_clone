import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from "react-router-dom";
//for the style password.
import "../signup/signup.css";

function Login() {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const[hidePassword, setHidePassword] = useState(false);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "https://zerodha-clone-backend-c43d.onrender.com/api/auth/login", { user }, { withCredentials: true }

            );
            //console.log(res);
            if (res.data.success === true) {
                toast.success(res.data.message || "Login successful!",{ position: "top-center" });
                setTimeout(() => {
                    window.location.href = "https://zerodhdashboard3.vercel.app/";
                }, 1000);
            } else {
                toast.error(res.data.message || "Login failed",{ position: "top-center" } );
            }
            setUser({ email: "", password: "" });
        } catch (err) {
            console.error(err);
            alert("Login failed. Please try again.");
        }
    };


    return (
        <div className="container" style={{ marginTop: "80px" }}>
            <div className="text-center">
                <h3>Welcome Back to Login page</h3>
                <p>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>
            <div className="row" style={{ marginTop: "80px" }}>
                <div className="col-12 col-md-6">
                    <img src="	https://zerodha.com/static/images/account_open.svg" alt="#" className="col-9" style={{ marginLeft: "90px" }} />
                </div>
                <div className="col-12 col-md-6">
                    <form className="singForm col-md-9" onSubmit={handleSubmit}>
                        <div className="form-group   ">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                style={{ padding: "15px" }}
                                onChange={handleChange}
                                autoComplete="email"
                                required
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group  " style={{ marginTop: "20px" }}>
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type={hidePassword?"text":"password"}
                                name="password"
                                value={user.password}
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                style={{ padding: "15px" }}
                                onChange={handleChange}
                                autoComplete="password"
                                required
                            />
                            <i className={hidePassword?"fa-solid fa-eye iconOpenEye":"fa-solid fa-eye-slash iconOpenEye"} onClick={()=>setHidePassword(!hidePassword)}></i>
                        </div>

                        <button type="submit" className="signBtn  mt-3">Login</button>
                    </form>
                </div>
            </div>
            <div className="text-center mt-5">
                <h2>You have not a demat account?</h2>
                <h5>Move your holdings to Zerodha and we'll cover your transfer costs, up to ₹500, <Link to="/signup">signIn →</Link></h5>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login;
