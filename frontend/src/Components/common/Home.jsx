import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigateToHome();
  });

  const navigateToHome = () => {
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
          navigate(`/${data.info.user_role}/home`);
        }
      });
  };

  useEffect(() => {
    navigateToHome();
  });


  return (
    <div className="container d-flex h-50">
    </div>
  );
};

export default Home;
