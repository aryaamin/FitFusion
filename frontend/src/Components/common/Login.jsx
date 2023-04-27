import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
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
        
        setChecked(true); 
      });
  };

  useEffect(() => {
    if (!checked) {
        checkAlreadyLogged();
    }
  });

  const handleLogin = (event) => {
    event.preventDefault();

    fetch("http://localhost:3001/login", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
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
        <form onSubmit={handleLogin} className="form-horizontal" method="POST">
            <div className="form-group mb-2">
                <label htmlFor="ID"> <b> Email: </b> </label>
                <div className="col-sm-auto">
                    <input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        type="text" 
                        placeholder="email" 
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
        <a href="/register"> Register </a>
        {error && <div className="alert alert-danger"> {error} </div>}
    </div>
</div>
  );
};

export default Login;
