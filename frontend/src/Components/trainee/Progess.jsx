import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Progress = () => {
  const navigate = useNavigate();
  const [exercises, setExercises] = useState("");

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
          setExercises(data.exercises);
        }
      });
  };

  useEffect(() => {
    getExercises();
  }, []);

  const handleBack = () => {
    navigate("/home");
  };

  return (
   <div>
    <div>
    <h2>CALORIE GRAPH Last 5 Days</h2>
    <VictoryChart>
    <VictoryLine data={calorie}/>
  </VictoryChart>
  </div>

  <div>
    <h2>Goal</h2>
    {goal}

    <h2>Activity Level</h2>
    {activityLevel}

    <h2>Height</h2>
    {height}

    <h2>Weight</h2>
    {weight}

  </div>
  </div>


  );
};

export default Progress;
