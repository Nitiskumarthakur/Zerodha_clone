import React, { useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import {useOpenCloseFunction} from "./GeneralContext";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

function SellActionWindow({ uid }) {
  
  // const {handleCloseBuyWindow} = useOpenCloseFunction();

  const [uniqueOrder, setUniqueOrder] = useState([]);
  const [price, setPrice] = useState(10);
  const [totalStock, setTotalStock] = useState(0);

  // useEffect(() => {
  //   axios.post("http://localhost:3002/order/uniqueorder", {
  //     name: uid
  //   }).then((res) => {
  //     setUniqueOrder(res.data.order);
  //     setPrice(res.data.totalPrice);
  //     setTotalStock(res.data.totalOrder);
  //   })
  // }, [uid])
  
  //For calculate the tatalprice based on the totalStock.
  // function changeOrder(e) {
  //   let value = (e.target.value)
  //   if (value > uniqueOrder.length) {
  //     value = uniqueOrder.length;
  //   }
  //   setTotalStock(value)
  // }
  
  // useEffect(() => {
  //   if (uniqueOrder.length > 0) {
  //     const tprice = totalStock * uniqueOrder[0].price;
  //     setPrice(tprice);
  //   }
  // }, [totalStock, uniqueOrder]);

  // const handleCancelClick = () => {
  //   handleCloseBuyWindow();
  // };
  
  return (
    // <div className="container" id="buy-window" draggable="true">
    //   <div className="regular-order">
    //     <div>
    //       <p style={{ fontSize: "18px" }}>StockName : <b style={{ color: "red" }}>{uniqueOrder[0]?.name}</b></p>
    //       <p> Total Stock : {uniqueOrder.length}</p>
    //     </div>
    //     <div className="inputs">
    //       <fieldset>
    //         <legend>Qty.</legend>
    //         <input
    //           type="number"
    //           name="qty"
    //           id="qty"
    //           onChange={(e) => changeOrder(e)}
    //           value={totalStock}
    //         />
    //       </fieldset>
    //       <fieldset>
    //         <legend>Price</legend>
    //         <input
    //           type="number"
    //           name="price"
    //           id="price"
    //           step="0.05"
    //           onChange={(e) => changeOrder(e)}
    //           value={price}
    //         />
    //       </fieldset>
    //     </div>
    //   </div>

    //   <div className="buttons">
    //     <span>Margin required ₹140.65</span>
    //     <div>
    //       <Link className="btn btn-blue" >
    //         Buy
    //       </Link>
    //       <Link to="/" className="btn btn-grey" onClick={handleCancelClick}>
    //         Cancel
    //       </Link>
    //     </div>
    //   </div>
    //   <ToastContainer/>
    // </div>
    <>
    </>
  )
}

export default SellActionWindow