import React from "react";
import { useUser } from "./UserContext";
import { useEffect, useState } from "react";

const Summary = () => {

  const { user, allOrder, getOrder } = useUser();

  const [orderPrice, setOrderPrice] = useState();

  async function getPrice() {
    await getOrder()
    const total = allOrder.reduce((sum, order) => sum + order.price, 0);
    setOrderPrice(total);
  }

  useEffect(() => {
    getPrice()
  }, []);
  return (
    <>
      <div className="username">
        <h3 className="fs-5 text-primary-emphasis">Hi, {user?.username}</h3>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{user?.Available_Balance?.toLocaleString("en-IN")}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>10k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allOrder?.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              {orderPrice} <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>23..</span>{" "}
            </p>
            <p>
              Investment <span>&#x20B9;{orderPrice?.toLocaleString("en-IN")}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
