import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";

import Summary from "./Summary";
import WatchList from "./WatchList";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Transactions from "./Transaction";


const Dashboard = () => {
  const userId = localStorage.getItem('userId');
  
  
  const [userData,setUserData]=useState({username:"none",holdings:[],orders:[],transactions:[],invested:0,currentValue:0,margin:0});
  const [stocks,setStocks]=useState([]);
  

  

console.log(userData)

  useEffect(()=>{

  
    const getUserData=async()=>{
      try{

    const response=  await axios.get(`https://stockify-backend-0khv.onrender.com/userProfile/${userId}`);
    console.log("user",response.data);
    setUserData(response.data);


    }
    catch(err){
      console.log("error ",err);
    }
  }
  const getStocks=async()=>{
    try{
      
      const response=  await axios.get(`https://stockify-backend-0khv.onrender.com/allStocks`);
     
      
      setStocks(response.data.data);
      
      
      
    }
    catch(err){
      console.log("error ",err);
    }
  }
  getStocks();
  getUserData();

  },[]);

  

  
  return (
    <div className="dashboard-container"> 
      {/* <GeneralContextProvider> */}
        <WatchList margin={userData.cashBalance}  stocks={stocks} setStocks={setStocks} holdings={userData.holdings} setUser={setUserData} userId={userId} />
      {/* </GeneralContextProvider> */}
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary name={userData.username} margin={userData.cashBalance} invested={userData.totalInvested} currVal={userData.currentValue} />} />
          <Route path="/orders" element={<Orders orders={userData.orders} />} />
          <Route path="/holdings" element={<Holdings  holdings={userData.holdings} setUser={setUserData} userId={userId}  invested={userData.totalInvested} currVal={userData.currentValue}  />} />
      
          <Route path="/transactions" element={<Transactions  transactions={userData.transactions}/>} />
          <Route path="/funds" element={<Funds margin={userData.cashBalance} invested={userData.totalInvested}  userId={userId} currVal={userData.currentValue} setUser={setUserData}/>} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
