import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//import GeneralContext from "./GeneralContext";
import { useOpenCloseFunction } from "./GeneralContext";

import "./BuyActionWindow.css";
import { useUser } from "./UserContext";

const BuyActionWindow = ({ uid }) => {
  //for GeneralContext close And open window.
  const { handleOpenBuyWindow, handleCloseBuyWindow } = useOpenCloseFunction();

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);


  //for userData
  const { user, getUser } = useUser();

  const handleBuyClick = async (e) => {
    try {
      let res = await axios.post("http://localhost:3002/order/neworder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
        owner: user._id
      }, {withCredentials:true});

      toast.success('Congratulations to Buy stock!', { position: "top-center" })
  
      setTimeout(() => {
        handleCloseBuyWindow();
        //for current UserData.
        getUser();
      }, 2000)
    }catch(err){
      toast.warning(err.response.data.message,{position:"top-center"});
      setTimeout(() => {
        handleCloseBuyWindow()
      }, 2000)
    }
  };

  const handleCancelClick = () => {
    handleCloseBuyWindow()
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={(e) => { handleBuyClick(e) }}>
            Buy
          </Link>
          <Link to="/" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BuyActionWindow;
