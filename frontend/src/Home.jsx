import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VictoryChart, VictoryLine } from "victory";


const Home = () => {
  const [role, setRole] = useState("");
  // const [xdata, setData] = useState({labels: [], datasets: []});
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [calorie, setCalorie] = useState([0, 0, 0, 0, 0]);
  const [goal, setGoal] = useState("");
  const [activityLevel, setactivityLevel] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");


  const navigate = useNavigate();

  const getCalorie = () => {
    fetch("http://localhost:3001/getcalorie", {
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
          let calinfo = [0, 0 , 0 , 0 , 0];
          for(var i=0; i<5; i++){
            if(data.calories[i]){
              calinfo[5-i+1] = JSON.parse(data.calories[i].avg_calories);
            }
          }
          setCalorie(calinfo);
        }
      });
  };


  const getTraineeTable = () => {
    fetch("http://localhost:3001/gettt", {
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
          setGoal(data.goal);
          setactivityLevel(data.activitylevel);
          setHeight(data.height);
          setWeight(data.weight);
        }
      });
  };

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
          if(data.info["user_role"] === "trainee"){
            getCalorie();
            getTraineeTable();
          }
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
                <button type="button" onClick={() => navigate("/editinfo")} >Edit Info</button>
                <button type="button" onClick={() => navigate("/trainerinfo")} >Trainer Info</button>
                <button 
                type="button"
                onClick={() => handleLogout()}
                >Logout</button>
                <h1>HI</h1>

    
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

                <div>
                  <a href="/exercises">Exercises</a>
                </div>
            </div>
              : 
              <div>HTML FOR TRAINER OR DIATICIAN</div>}
    </div>
  );
};

export default Home;
