import React from "react";
import { useState } from "react";
import { useAuth } from "../authContext";
import {Link} from "react-router-dom" 
import { useNavigate  } from "react-router-dom";
const Menu = () => {
  const {setCurrentUser}=useAuth();
const [selectedMenu,setSelectMenu]=useState(0);
const navigate=useNavigate();

const handleMenuClick=(index)=>{
  setSelectMenu(index);
};

const handleProfileClick=()=>{
 localStorage.removeItem("token");
                                        localStorage.removeItem("userId");
                                        setCurrentUser(null);
                                      navigate("/");
           
           }

const menuClass="menu";
const activeMenuClass="menu selected";

 return (
    <div className="menu-container">
      <img src="media/images/logo.svg" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link  to="/home" onClick={()=>{handleMenuClick(0)}}>
            <p className={selectedMenu===0?activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>

          <li>
            <Link  to="/home/orders" onClick={()=>{handleMenuClick(1)}}>
            <p className={selectedMenu===1?activeMenuClass:menuClass}>Orders</p>
            </Link>
           
          </li>
          
          <li>
            <Link  to="/home/holdings" onClick={()=>{handleMenuClick(2)}}>
            <p className={selectedMenu===2?activeMenuClass:menuClass}>Holdings</p>
            </Link>
            
          </li>
          <li>
           <Link to="/home/transactions" onClick={()=>{handleMenuClick(3)}}>
            <p className={selectedMenu===3?activeMenuClass:menuClass}>Transactions</p>
            </Link>
          </li>
          <li>
            <Link  to="/home/funds" onClick={()=>{handleMenuClick(4)}}>
            <p className={selectedMenu===4?activeMenuClass:menuClass}>Funds</p>
            </Link>

          </li>
          <li>
            <Link  to="/home/apps" onClick={()=>{handleMenuClick(5)}}>
            <p className={selectedMenu===5?activeMenuClass:menuClass}>Apps</p>
            </Link>
         
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar"><i class="fa-solid fa-right-from-bracket"></i></div>
          <p className="username">Logout</p>
        </div>
        
      </div>
    </div>
  );
};

export default Menu;
