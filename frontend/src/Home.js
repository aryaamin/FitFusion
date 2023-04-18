import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  // const handleLogout = () => {
  //   fetch("http://localhost:3001/logout", {
  //     method: "GET",
  //     mode: "cors",
  //     credentials: "include",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       navigate("/login");
  //     });
  // };

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
        <div className="mx-auto align-self-center">
            <h1>HOME</h1>
            <h1>YOU ARE A {role}</h1>
            {role === 'trainee'? 
              <div>HTML FOR TRIANEE</div>
              : 
              <div>HTML FOR TRAINER OR DIATICIAN</div>}
        </div>
    </div>
  );
};

export default Home;
