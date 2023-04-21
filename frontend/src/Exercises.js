import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VictoryChart, VictoryLine } from "victory";


const Exercises = () => {

  const navigate = useNavigate();

  const getExercises = () => {
    fetch("http://localhost:3001/getexercises", {
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
          
        }
      });
  };

  useEffect(() => {
    getExercises();
  });

  return (
    <h1>DISPLAY EXERCIES and DIET PLAN INFO OF A TRAINEE HERE</h1>
  );
};

export default Exercises;
