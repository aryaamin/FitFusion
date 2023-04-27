import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Components/common/Login";
import Register from "./Components/common/Register";
import Home from "./Components/common/Home";
import TraineeHome from "./Components/trainee/Home";
import TrainerHome from "./Components/trainer/Home";
import Editinfo from "./Components/trainee/Editinfo";
import Exercises from "./Components/trainee/Exercises";
import Trainerinfo from "./Components/trainee/Trainerinfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="/trainee/home" element={<TraineeHome />} />
        <Route path="/trainee/editinfo" element={<Editinfo />} />
        <Route path="/trainee/trainerinfo" element={<Trainerinfo />} />
        <Route path="/trainee/exercises" element={<Exercises />} />
        <Route path="/trainer/home" element={<TrainerHome />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
