import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const checkAlreadyLogged = async (event) => {
    await fetch("http://localhost:3001/check-session", {
      method: "GET",
      mode: "cors",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else if (data.active) {
          navigate("/home");
        }
      });
  };

  useEffect(() => {
    checkAlreadyLogged();
  });

  const handleLogin = () => {
    fetch("http://localhost:3001/login", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError("Login Failed!");
        } else {
          navigate("/home");
        }
      });
  };

  return (
    <div className="container d-flex h-50">
    <div className="mx-auto align-self-center">
        <h1> Login </h1>
        <form onSubmit={handleLogin} className="form-horizontal">
            <div className="form-group mb-2">
                <label htmlFor="ID"> <b> ID: </b> </label>
                <div className="col-sm-auto">
                    <input 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control"
                        type="text" 
                        placeholder="student id" 
                        id="id" 
                        name="id"/>
                </div>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="password"> <b> Password: </b> </label>
                <div className="col-sm-auto">
                    <input 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        type="password" 
                        placeholder="******" 
                        id="password" 
                        name="password"/>
                </div>
            </div>
            <button className="btn btn-primary"> Log In </button>
        </form>
        {error && <div className="alert alert-danger"> {error} </div>}
    </div>
</div>
  );
};

export default Login;
