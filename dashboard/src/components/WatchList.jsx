import React, { useState, useContext } from "react";
import axios from "axios";
//import GeneralContext from "./GeneralContext";
import {useOpenCloseFunction} from "./GeneralContext"
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { watchlist } from "../data/data";
import { DoughnutGraph } from "./DoughnutGraph";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  
  //for DoughnutGraph
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };


  return (

    <div className="watchlist-container">
        
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
            
        })}
      </ul>

      <DoughnutGraph data={data} />
    </div>
  );
};

export default WatchList;

//WatchList Item Component 
// for Item Individual - hover and more 

const WatchListItem = ({ stock }) => {


  const [showWatchlistActions, setShowWatchlistActions] = useState(false);
  
  // for Hover
  const handleMouseEnter = (e) => {
    e.preventDefault(); 
    setShowWatchlistActions(true);
  };
  // For hover Leave
  const handleMouseLeave = (e) => {
    e.preventDefault(); 
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
       {showWatchlistActions && <WatchListActions uid={stock.name} />} 
    </li>
  );
};

//For watchList Action Component.
const WatchListActions = ({uid}) => {
  //const generalContext = useContext(GeneralContext);
  const {handleOpenBuyWindow,handleOpenSellWindow} = useOpenCloseFunction();
  const handleBuyClick = () => {
    handleOpenBuyWindow(uid);
  };
  
  const handleSellClick =()=>{
    handleOpenSellWindow(uid);
  }

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          //Hover karne per transition 'Grow'
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleSellClick}
        >
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};


