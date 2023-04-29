import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TrainerEditinfo = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
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
        if (!data.active) {
          navigate("/login");
        }
      });
  };

  const getUserInfo = () => {
    fetch("http://localhost:3001/getuserinfo", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.active) {
          navigate("/login");
        } else {
          setName(data.info["name"]);
          setPassword(data.info["password"]);
          setAge(data.info["age"]);
          setEmail(data.info["email"]);
          setGender(data.info["gender"]);
        }
      });
  };

  useEffect(() => {
    checkAlreadyLogged();
    getUserInfo();
  }, []);

  const handleEditinfo = () => {
    fetch("http://localhost:3001/editinfo", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password, email, age, gender }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError("Edit Failed!");
        } else {
          navigate("/home");
        }
      });
  };

  return (
    <div className="container d-flex h-50">
    <div className="mx-auto align-self-center">
        <h1> EDIT INFO </h1>
        <form onSubmit={handleEditinfo} className="form-horizontal">
            <div className="form-group mb-2">
                <label htmlFor="name"> <b> Name: </b> </label>
                <div className="col-sm-auto">
                    <input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        type="text" 
                        id="name" 
                        required
                        name="name"/>
                </div>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="password"> <b> Password: </b> </label>
                <div className="col-sm-auto">
                    <input 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        type="text" 
                        id="password" 
                        required
                        name="password"/>
                </div>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="email"> <b> Email: </b> </label>
                <div className="col-sm-auto">
                    <input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        type="text" 
                        id="email" 
                        required
                        name="email"/>
                </div>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="age"> <b> Age: </b> </label>
                <div className="col-sm-auto">
                    <input 
                        value={age} 
                        onChange={(e) => setAge(e.target.value)}
                        className="form-control"
                        type="number" 
                        step="1"
                        placeholder="" 
                        id="age" 
                        min="1"
                        required
                        name="age"/>
                </div>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="age"> <b> Gender: </b> </label>
                <div className="col-sm-auto">
                <select
                    id="dropdown"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                  </select>
                </div>
            </div>
            <button className="btn btn-primary"> Submit </button>
        </form>
        <button 
            className="btn btn-primary"
            type="button"
            onClick={() => navigate("/home")}> Home </button>
        {error && <div className="alert alert-danger"> {error} </div>}
    </div>
</div>
  );
};

export default TrainerEditinfo;
