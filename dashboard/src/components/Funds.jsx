import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Funds = () => {

  const { user, getUser } = useUser();

  const [creditAmount, setCreditAmount] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState(false);
  const [showTransaction, setShowTransaction] = useState(false);
  const [draggablePageShow, setdragglePageShow] = useState(false);

  //Here defined which page show for Credit and Debit Money.
  const handleFund_page = (text) => {

    if (text === "add") {
      setdragglePageShow(true)
      console.log("add_page")
      setCreditAmount(true)
      setWithdrawAmount(false);
      setShowTransaction(false)
    } else if (text === "withdraw") {
      setdragglePageShow(true)
      console.log("withdraw_page")
      setWithdrawAmount(true);
      setCreditAmount(false);
      setShowTransaction(false)
    } else {
      setdragglePageShow(false)
      console.log("Tranaction_page")
      setShowTransaction(true)
      setCreditAmount(false)
      setWithdrawAmount(false)
    }
  }
  //It is defined here which function will be executed.
  const handleValue = (amount) => {
    (creditAmount ? credit_amount(amount) : debit_amount(amount));
  }
  //for credit_Money in the User Data base.
  async function credit_amount(amount) {
    if (amount > 0) {
      const res = await axios.post("https://zerodha-clone-backend-c43d.onrender.com/api/fund/credit", { amount }, { withCredentials: true })

      toast.success(res.data.message, { position: "top-center" })

      //for update the current user.
      await getUser()

      setTimeout(() => {
        setdragglePageShow(false);
      }, 1000)
    } else {
      toast.warning("Amount Grater then 0", { position: "top-center" })
      setTimeout(() => {
        setdragglePageShow(false);
      }, 1000)
    }
  }

  //for debit_Money in the User Data base.
  async function debit_amount(amount) {
    if (amount > 0) {
      const res = await axios.post("https://zerodha-clone-backend-c43d.onrender.com/api/fund/debit", { amount }, { withCredentials: true })

      toast.success(res.data.message, { position: "top-center" })
      //for update the current user.
      await getUser()
      setTimeout(() => {
        setdragglePageShow(false);
      }, 1000)
    } else {
      toast.warning("Amount Grater then 0", { position: "top-center" })
      setTimeout(() => {
        setdragglePageShow(false);
      }, 1000)
    }
  }

  //console.log("funds_page")

  return (
    <>
      <h2>Equity</h2>
      <div className="row ">
        <div className="col-5 funds-main">
          <div className="fund-page">
            <p>Availbable Balance</p>
            <p style={{ color: "#666666" }}>{user?.Available_Balance?.toLocaleString("en-In")}</p>
          </div>
          <hr style={{ marginTop: "-1rem" }} />
          <div className="fund-page" style={{ marginTop: "-2rem" }}>
            <p>Used Margin</p>
            <p>{1245?.toLocaleString("en-IN")}</p>
          </div>
          <hr style={{ marginTop: "-1rem" }} />
          <div className="fund-page" style={{ marginTop: "-2rem" }}>
            <p>Available Cash</p>
            <p>1245</p>
          </div>
          <hr style={{ marginTop: "-1rem" }} />
        </div>
        <div className="col-6 fund-button " style={{ marginTop: "-10rem" }}>
          <div>
            <button
              className="btn"
              onClick={() => handleFund_page("add")}
            >Add Funds</button>
          </div>
          <div>
            <button
              className="btn"
              onClick={() => handleFund_page("withdraw")}
            >Withdrawal</button>
          </div>
          <div>
            <button
              className="btn"
              onClick={() => handleFund_page("tranaction")}
            >Tranactions</button></div>
        </div>
      </div>

      {draggablePageShow && <DraggablePage sendValue={handleValue} text={creditAmount ? "Add money page! " : "Withdrawal Page!"} setPage={setdragglePageShow}/>}
      {showTransaction && <Tranaction_page />}
      <ToastContainer />

    </>
  )
}
export default Funds;

//It is form the addMoney and Withdraw.
const DraggablePage = ({ sendValue, text, setPage }) => {
  const [addValue, setValue] = useState();
  return (
    <>
      <div>
        
        <div className="fund_input_page">
          <button className="xbtn" onClick={()=>setPage(false)}>x</button>
          <p>{text}</p>
          <input
            type="number"
            name="addValue"
            value={addValue}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => sendValue(addValue)} className="btn">Submit</button>
        </div>
      </div>
    </>
  )
}


//Transaction show page.
const Tranaction_page = () => {
  
  const [allTransaction, setAllTransaction] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const res = await axios.post("https://zerodha-clone-backend-c43d.onrender.com/api/transaction/", {}, { withCredentials: true })
      setAllTransaction(res.data.transaction);
    }
    fn()
  }, []);

  const formatDateTime = (dt)=>{
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

  return (
    <>
      <div className="order-table">
        <h3 className="text-center mt-5">All transaction History</h3>
        <table >
          <thead>
            <tr>
              <th className="text-center">Date</th>
              <th className="text-center">Category</th>
              <th className="text-center">Type</th>
              <th className="text-center">QTY</th>
              <th className="text-center">Amount</th>
            </tr>
          </thead>
          {allTransaction.map((trans) => {
            return (
              <>
                <tbody key={trans._id}>
                  <tr >
                    <td style={{width:"250px"}} className="text-center">{formatDateTime(trans.createdAt)}</td>
                    <td className="text-center">{trans.stock_name?trans.category+"-"+trans.stock_name:trans.category}</td>
                    <td className="text-center">{trans.type}</td>
                    <td className="text-center">{trans.qty?trans.qty:"-"}</td>
                    <td className="text-center" style={{fontSize:"16px"}}>{trans.type==="CREDIT"?"+":"-"}{trans.amount}</td>
                  </tr>
                </tbody>

              </>
            );
          })}
        </table>
      </div>
    </>
  )
}