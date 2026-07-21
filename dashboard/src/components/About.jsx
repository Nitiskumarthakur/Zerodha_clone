import React from "react";
import { useUser } from "./UserContext";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
const About = () => {

  const { user, allOrder } = useUser();
  
  const [price, setPrice ] = useState();
  const [qty, setqty] = useState();

  function getPrice(){
    const totalPrice = allOrder.reduce((sum, order)=> sum + order.price, 0);
    setPrice(totalPrice);
  }
  function getQty(){
    const totalqty = allOrder.reduce((sum, order)=>sum + order.qty, 0);
    setqty(totalqty);
  }
  useEffect(()=>{
    getPrice();
   getQty();
  }, [])
  //for Date time Formate.
  const formatDateTime = (dt) => {
    const date = new Date(dt);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }) + ", " + date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  return <>
    <div className="app_page">
      <div className="row">
        <div className="col-4">
          <img src="https://as2.ftcdn.net/v2/jpg/08/15/34/53/1000_F_815345384_44Cjz3BEUr8xcIGXrcI86i1RVBo6lIfE.jpg" alt="image" />
        </div>
        <div className="col-8 mt-2 border-bottom">
          <div className="">
            <p>Id: <small>{user._id}</small></p>
            <p>Email: <small>{user.email}</small></p>
            <p>Name: <small>{user.username.charAt(0).toUpperCase()+user.username.slice(1)}</small></p>
            <p>Available Balance: <small>₹{user.Available_Balance?.toLocaleString("en-IN")}</small> <Link to="/funds">Add_amount</Link></p>
            <p>Joined Date: <small>{formatDateTime(user.createdAt)}</small> </p>
          </div>
        </div>
        <div className="OrderInfo">
          <p className="border-bottom">Order Number: <small>{allOrder?.length}</small></p>
          <p className="border-bottom">Total Order Price: <small>{price}</small></p>
          <p className="border-bottom">Total Quantity: <small>{qty}</small></p>
        </div>
      </div>
    </div>
  </>;
};

export default About;