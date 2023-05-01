import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [role, setRole] = useState("trainer");
  const [email, setEmail] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [goal, setGoal] = useState("lose weight");
  const [activity, setActivity] = useState(1);
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
      body: JSON.stringify({name, password, email, age, gender, role, height, weight, goal, activity}),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
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
                        type="password" 
                        placeholder="******" 
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
                        placeholder="a@a.com" 
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
                        id="age" 
                        min={1}
                        required
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
                        <option value="trainer">trainer</option>
                        <option value="trainee">trainee</option>
                        <option value="dietician">dietician</option>
                     </select>
                </div>
            </div>
            {role == "trainee" ? (
                <div>
                <div className="form-group mb-2">
                    <label htmlFor="Height"> <b> Height: </b> </label>
                    <div className="col-sm-auto">
                        <input 
                            value={height} 
                            onChange={(e) => setHeight(e.target.value)}
                            className="form-control"
                            type="number" 
                            step="0.1" 
                            min="1" 
                            pattern="\d+(\.\d{1,2})?"
                            id="height" 
                            required
                            name="height"/>
                    </div>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="Weight"> <b> Weight: </b> </label>
                    <div className="col-sm-auto">
                        <input 
                            value={weight} 
                            onChange={(e) => setWeight(e.target.value)}
                            className="form-control"
                            type="number" 
                            id="weight" 
                            min="1"
                            required
                            name="weight"/>
                    </div>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="role"> <b> Goal: </b> </label>
                    <div className="col-sm-auto">
                         <select id="dropdown" value={goal} onChange={(e) => setGoal(e.target.value)}>
                            <option value="lose weight">lose weight</option>
                            <option value="gain weight">gain weight</option>
                            <option value="maintain weight">maintain weight</option>
                            <option value="build muscle">build muscle</option>
                         </select>
                    </div>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="activity_level"> <b> Activity Level: </b> </label>
                    <div className="col-sm-auto">
                         <select id="dropdown" value={activity} onChange={(e) => setActivity(e.target.value)}>
                            <option value="1">sedentary</option>
                            <option value="2">little active</option>
                            <option value="3">active</option>
                            <option value="4">decently active</option>
                            <option value="5">exetremely active</option>
                         </select>
                    </div>
                </div>
                </div>
            ) : (<div></div>)}

            <button className="btn btn-primary"> Register </button>
        </form>
        <a href="/login">Login </a>
        {error && <div className="alert alert-danger"> {error} </div>}
    </div>
</div>
  );
};

export default Register;
