import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Login";
import Home from "./Home";
import Editinfo from "./Editinfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="editinfo" element={<Editinfo />} />
        {/* <Route path="home/registration" element={<Registration />} />
        <Route path="course/:cid" element={<Course />} />
        <Route path="course/running" element={<Running />} />
        <Route path="course/running/:deptname" element={<Department />} />
        <Route path="instructor/:instructor_id" element={<Instructor />} />
        <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
