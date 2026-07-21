import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from "./UserContext";

const Orders = () => {
  
  const {getOrder, allOrder} = useUser();
  //const [allOrder, setAllorder] = useState([]);
  const [deletBtn, setDeleteBtn] = useState(false);
  
  // useEffect(() => {
  //   axios.get('http://localhost:3002/order/allorder', { withCredentials: true }).then((res) => {
  //     setAllorder(res.data);
  //   })
  // }, []);
  useEffect(()=>{
    getOrder();
  },[])

  const handleClick = (id) => {
    setDeleteBtn((pre) => pre === id ? null : id);
  };

  return (
    <div className="orders" >
      <div className="no-orders">
        <p>{allOrder == 0 ? "You haven't placed any orders today" : `You have ${allOrder.length} Order.`}</p>
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            {allOrder.map((stock) => {
              return (
                <>
                  <tbody key={stock._id} onClick={() => handleClick(stock._id)} >
                    <tr className="Orderitem" >
                      <td >{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.price}</td>
                      <td style={{ paddingRight: "20px", fontSize: "15px" }}>{stock.mode}</td>
                    </tr>
                  </tbody>
                  {deletBtn === stock._id && <OrderSell stock={stock} closeBtnFun={handleClick} />}
                </>
              );
            })}
          </table>
        </div>
        <div>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Orders;

//for delete the Order the here 
const OrderSell = ({ stock, closeBtnFun }) => {
  
  const {getUser, getOrder } = useUser();
  
  //to delete the router
  async function handleSellBtn() {

    let res = await axios.post("http://localhost:3002/order/sellorder", {stock},{withCredentials:true});
    toast.success(res.data.message, { position: "top-center" })
    setTimeout(() => {
      closeBtnFun();
      getUser();
      getOrder();
    }, 1000)
  }
  return (

    <div className="OrderAction">
      <button className="orderSell" onClick={handleSellBtn}>sell</button>
    </div>
  );
};