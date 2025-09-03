import { useEffect } from "react";
import { useAuth } from "./authContext";
import { useNavigate, useRoutes } from "react-router-dom";

import Layout from "./Layout";


// Authorized components
import Home from "./Components/Home";

// Unauthorized components

import Signup from "./Components/Signup";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/About";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./NotFound";


import Login from "./Components/Login"

const ProjectRoutes = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useAuth();

  useEffect(() => {
    const userIdFromStorage = localStorage.getItem("userId");

    if (userIdFromStorage && !currentUser) {
      setCurrentUser(userIdFromStorage);
      navigate(window.localStorage.pathname)
      if (["/login", "/", "/signup", "/about", "/product", "/pricing", "/support"].includes(window.location.pathname)) {
          navigate("/home");
        }else{
          navigate(window.localStorage.pathname)

      }
    }

    if (!userIdFromStorage && !["/login", "/", "/signup", "/about", "/product", "/pricing", "/support"].includes(window.location.pathname)) {
      navigate("/login");
    }

    if (userIdFromStorage && ["/login","/signup"].includes(window.location.pathname) ) {
      navigate("/home");
    }
  }, [setCurrentUser, navigate, currentUser]);

  const routes = useRoutes([
    // Unauthorized routes (public)
    {
      path: "/",
      element: <Layout><HomePage /></Layout>,
    },
    {
      path: "/signup",
      element: <Layout><Signup /></Layout>,
    },
    {
      path: "/about",
      element: <Layout><AboutPage /></Layout>,
    },
    {
      path: "/product",
      element: <Layout><ProductPage /></Layout>,
    },
    {
      path: "/pricing",
      element: <Layout><PricingPage /></Layout>,
    },
    {
      path: "/support",
      element: <Layout><SupportPage /></Layout>,
    },
    {
      path: "/login",
      element: <Layout><Login /></Layout>,
    },

    
   
   

    // Fallback
   
    // Authorized routes (private)
    {
      path: "/home/*",
      element: <Home />,
    },

     {
      path: "*",
      element: <Layout><NotFound /></Layout>,
    }
  ]);

  return routes;
};

export default ProjectRoutes;
