import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";




const Home = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleLogout = () => {
    fetch("http://localhost:3001/logout", {
      method: "GET",
      mode: "cors",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/login");
      });
  };

  const goto = (e, path) => {
    e.preventDefault();
    navigate(path);
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
          setAge(data.info["age"]);
          setRole(data.info["user_role"]);
          setEmail(data.info["Email"]);
          setGender(data.info["gender"]);
        }
      });
  };

  useEffect(() => {
    getUserInfo();
  });

  return (
    
    <div className="container d-flex h-50">
            {role === 'trainee'? 
              <div style={{ position:'fixed',left:'0px', height: '100%' }}>
                <button 
                type="button"
                onClick={(e) => goto(e, "/editinfo")}
                >Edit Info</button>
                <button 
                type="button"
                onClick={handleLogout}
                >Logout</button>
                <h1>HI</h1>
            </div>
              : 
              <div>HTML FOR TRAINER OR DIATICIAN</div>}
    </div>
  );
};

export default Home;
