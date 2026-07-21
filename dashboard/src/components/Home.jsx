import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import axios from "axios";
import { useUser } from "./UserContext";


const Home = () => {

  
  const  {isUser} = useUser();

  if (isUser === null) {
    return <p className="text-center mt-5">Loadding......</p>
  }
  if (isUser === false) {
    window.location.href = "https://zerodhfronted3.vercel.app/login"; // for signup/login
    return null
  }
  return (
    <div>
      <TopBar />
      <Dashboard />
    </div>
  );
};

export default Home;
