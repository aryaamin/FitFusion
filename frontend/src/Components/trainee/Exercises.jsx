import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Exercises = () => {
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
      <h2>Exercise History</h2>
      {exercises.length > 0 && (
        <table className="exercise-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((exercise) => (
              <tr key={exercise.id}>
                <td>{exercise.exercise_id}</td>
                <td>{exercise.exercise_type}</td>
                <td>{exercise.date.substring(0, 10)}</td>
                <td>{exercise.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!exercises.length > 0 && <h3> No records so far </h3>}

      <br></br>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default Exercises;
