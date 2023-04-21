import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Login";
import Home from "./Home";
import Editinfo from "./Editinfo";
import Exercises from "./Exercises";
import Trainerinfo from "./Trainerinfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="editinfo" element={<Editinfo />} />
        <Route path="trainerinfo" element={<Trainerinfo />} />
        <Route path="exercises" element={<Exercises />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
