import React from "react";
import "./profile.css"
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";

const Profile = () => {
    
    const {setIsUser} = useUser();
    
    const hadleLogout = ()=>{
        setIsUser(false);
    }

    return (
        // <div style={{ position: "absolute", backgroundColor:'red',height:"30rem"}}>
        <div className="profile">
            <ul> 
                <Link to="/"><li>Dashboard </li></Link>
                {/* <Link to="/holdings"><li>Holdings</li></Link>
                <Link to="/positions"><li>Positions</li></Link> */}
                <Link to="/orders"><li>Orders</li></Link>
                <Link to="/funds"><li>Funds</li></Link>
                <Link to="/"><li>Profile</li></Link>
                {/* <Link to="/"><li>Settings</li></Link> */}
                <Link to="/" onClick={hadleLogout}><li>Logout</li></Link>
            </ul>
        </div>
        // </div>
    )
}

export default Profile;