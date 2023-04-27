import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [role, setRole] = useState("trainee");
  const [email, setEmail] = useState("");
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

  const handleRegister = (event) => {
    event.preventDefault();

    fetch("http://localhost:3001/register", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, password, email, age, gender, role}),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError("Register Failed!");
        } else {
          navigate("/login");
        }
      });
  };

  return (
    <div className="container d-flex h-50">
    <div className="mx-auto align-self-center">
        <h1> Register </h1>
        <form onSubmit={handleRegister} className="form-horizontal" method="POST">
            <div className="form-group mb-2">
                <label htmlFor="ID"> <b> Name: </b> </label>
                <div className="col-sm-auto">
                    <input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        type="text" 
                        placeholder="user id" 
                        id="name" 
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
                        type="password" 
                        placeholder="******" 
                        id="password" 
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
                        placeholder="a@a.com" 
                        id="email" 
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
                        id="age" 
                        name="age"/>
                </div>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="role"> <b> Gender: </b> </label>
                <div className="col-sm-auto">
                     <select id="dropdown" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">male</option>
                        <option value="female">female</option>
                     </select>
                </div>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="role"> <b> Role: </b> </label>
                <div className="col-sm-auto">
                     <select id="dropdown" value={role} onChange={(e) =>  setRole(e.target.value)}>
                        <option value="trainee">trainee</option>
                        <option value="trainer">trainer</option>
                        <option value="dietician">dietician</option>
                     </select>
                </div>
            </div>
            <button className="btn btn-primary"> Register </button>
        </form>
        <a href="/login">Login </a>
        {error && <div className="alert alert-danger"> {error} </div>}
    </div>
</div>
  );
};

export default Register;
