import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Components/common/Login";
import Register from "./Components/common/Register";
import Home from "./Components/common/Home";
import TraineeHome from "./Components/trainee/Home";
import TraineeEditinfo from "./Components/trainee/Editinfo";
import Exercises from "./Components/trainee/Exercises";
import Trainerinfo from "./Components/trainee/Trainerinfo";
import TraineeProgress from "./Components/trainee/Progress";
import Workout from "./Components/trainee/Workout";
import TrainerHome from "./Components/trainer/Home";
import TrainerEditInfo from "./Components/trainer/Editinfo";
import TrainerProgress from "./Components/trainer/Progress";
import TrainerMeal from "./Components/trainer/Meal";
import TrainerExercisePlan from "./Components/trainer/ExercisePlan";
import Dieticianinfo from "./Components/trainee/DieticianInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="/trainee/home" element={<TraineeHome />} />
        <Route path="/trainee/editinfo" element={<TraineeEditinfo />} />
        <Route path="/trainee/trainerinfo" element={<Trainerinfo />} />
        <Route path="/trainee/dieticianinfo" element={<Dieticianinfo />} />
        <Route path="/trainee/exercises" element={<Exercises />} />
        <Route path="/trainee/progress/:id" element={<TraineeProgress />} />
        <Route path="/trainee/workout" element={<Workout />} />
        <Route path="/trainer/home" element={<TrainerHome />} />
        <Route path="/trainer/editinfo" element={<TrainerEditInfo />} />
        <Route path="/trainer/progress" element={<TrainerProgress />} />
        <Route path="/trainer/meals" element={<TrainerMeal />} />
        <Route path="/trainer/exerciseplans" element={<TrainerExercisePlan />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
