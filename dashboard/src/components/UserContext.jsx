import React, { useState, useEffect } from "react";
import { useContext, createContext } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [isUser, setIsUser] = useState(null);
    const [user, setUser] = useState({});
    const [allOrder, setAllOrder] = useState([])
    
    //for cuurent userData and check the authentication.
    const getUser = async () => {
        try {
            const res = await axios.post(
                "http://localhost:3002/api/auth/valification", {}, { withCredentials: true }
            );
            // console.log("res",res)
            if (res.data.status === true) {
                setIsUser(true);
            } else {
                setIsUser(false);
            }
            setUser(res.data.user);
        } catch (err) {
            console.log(err);
            setIsUser(false);
        }
    };
    
    //get all the Order
    const getOrder = ()=>{
        axios.get('http://localhost:3002/order/allorder', { withCredentials: true }).then((res) => {
            setAllOrder(res.data);
        })
    };
    //

    useEffect(() => {
        getUser();
        getOrder();
    }, []);

    return (
        <UserContext.Provider value={{ user, setIsUser,isUser, getUser,getOrder ,allOrder}}>
            {children}
        </UserContext.Provider>
    )
}
//Only import useUser import , they have all value.
export const useUser = () => useContext(UserContext);