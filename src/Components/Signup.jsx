import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../authContext";

// import { PageHeader } from "@primer/react/drafts";
import { PageHeader } from "@primer/react/experimental";

import { Box, Button } from "@primer/react";
import "./auth.css";

// import logo from "../../assets/repare.png";
import { Link } from "react-router-dom";    

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { setCurrentUser } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username.trim() || !email.trim() || !password.trim()) {
        alert("Please fill in all fields.");
        return;
      }

    try {
      setLoading(true);
      const res = await axios.post("https://stockify-backend-0khv.onrender.com/signup", {
        email: email,
        password: password,
        username: username,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      
      setCurrentUser(res.data.userId);
      setLoading(false);
      
      window.location.href = "/home";
    } catch (err) {
     
      console.error("err",err.response);
      alert(err.responsex);
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-logo-container">
      {/* <img className="logo-login"  src={logo} alt="Logo" /> */}

      </div>

      <div className="login-box-wrapper">
        <div className="login-heading">
          <Box sx={{ padding: 1 }}>
            <PageHeader>
              <PageHeader.TitleArea variant="large">
                <PageHeader.Title>Register yourself </PageHeader.Title>
              </PageHeader.TitleArea>
            </PageHeader>
          </Box>
        </div>

            <form >
        <div className="login-box">
          <div>

            <label className="label">Username</label>
            <input
              autoComplete="off"
              name="Username"
              id="Username"
              className="input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
          </div>

          <div>
            <label className="label">Email address</label>
            <input
              autoComplete="off"
              name="Email"
              id="Email"
              className="input"
              
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </div>

          <div className="div">
            <label className="label">Password</label>
            <input
              autoComplete="off"
              
              name="Password"
              id="Password"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>

          <Button
            variant="primary"
            className="submit-btn"
            disabled={loading}
            onClick={handleSignup}
            >
            {loading ? "Loading..." : "Signup"}
          </Button>
        <div className="pass-box">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
        </div>
              </form>

      </div>
    </div>
  );
};

export default Signup;