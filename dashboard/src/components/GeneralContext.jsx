// import React, { useState } from "react";

// import BuyActionWindow from "./BuyActionWindow";
// import SellActionWindow from "./SellActionWindow";

// const GeneralContext = React.createContext({
//   openBuyWindow: (uid) => {},
//   closeBuyWindow: () => {},
//   openSellWindow:(uid)=> {}
// });

// export const GeneralContextProvider = (props) => {
    
    
//   const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
//   const[isSellWindowOpen, setIsSellWindowOpen] = useState(false);
//   const [selectedStockUID, setSelectedStockUID] = useState("");

//   const handleOpenBuyWindow = (uid) => {
//     setIsBuyWindowOpen(true);
//     setSelectedStockUID(uid);
//   };

//   const handleCloseBuyWindow = () => {
//     setIsBuyWindowOpen(false);
//     setIsSellWindowOpen(false);
//     setSelectedStockUID("");
//   };

//   const handleOpenSellWindow = (uid)=>{
//     console.log(uid);
//     setIsSellWindowOpen(true);
//     setSelectedStockUID(uid);
//   }

//   return (
//     <GeneralContext.Provider
//       value={{
//         openBuyWindow:handleOpenBuyWindow,
//         closeBuyWindow: handleCloseBuyWindow,
//         openSellWindow:handleOpenSellWindow
//       }}
//     >
//       {props.children}
//       {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
//       {isSellWindowOpen && <SellActionWindow uid={selectedStockUID}/>}
//     </GeneralContext.Provider>
//   );
// };

// export default GeneralContext;
import React, { useState } from "react";
import { createContext } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";
import { useContext } from "react";

const GeneralContext = createContext();

export const GeneralContextProvider = (props) => {
    
    
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const[isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSellWindow = (uid)=>{
    console.log(uid);
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  }

  return (
    <GeneralContext.Provider
      value={{
        handleOpenBuyWindow,
        handleCloseBuyWindow,
        handleOpenSellWindow
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID}/>}
    </GeneralContext.Provider>
  );
};

//export default GeneralContext;

export const useOpenCloseFunction =()=> useContext(GeneralContext)