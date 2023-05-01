import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GaugeChart from "react-gauge-chart";
import GradientSVG from "./gradientSVG";
import HomeIcon from "@mui/icons-material/Home";

const Progress = () => {
  const navigate = useNavigate();
  const [exercises, setExercises] = useState([]);
  const [calorie, setCalorie] = useState([0, 0, 0, 0, 0]);
  const [activityLevel, setactivityLevel] = useState(1);
  const [activityLevelType, setactivityLevelType] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [inputcalorie, setInpCalorie] = useState("");
  const [datecalorie, setDateCalorie] = useState("");
  const [meal, setMeal] = useState("breakfast");
  const [inputexercise, setInpExercise] = useState("running");
  const [dateexercise, setDateExercise] = useState("");
  const [duration, setDuration] = useState("");
  const [user_id, setId] = useState("");
  const idCSS = "hello";
  const id = useParams().id;

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
          setId(data.info["user_id"]);
        }
      });
  };

  const changeWeight = () => {
    if (user_id != id) {
      return;
    }
    const userInput = prompt("Enter Weight:");

    if (userInput != null) {
      const weight_new = parseFloat(userInput);

      if (!isNaN(weight_new) && weight_new >= 0) {
        fetch("http://localhost:3001/updateweight", {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ weight_new }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              alert(data.error);
            } else {
              getTraineeTable();
            }
          });
      } else {
        alert("Invalid input! Please enter a valid weight");
      }
    }
  };

  const changeHeight = () => {
    if (user_id != id) {
      return;
    }
    const userInput = prompt("Enter Height:");

    if (userInput != null) {
      const height_new = parseFloat(userInput);

      if (!isNaN(height_new) && height_new >= 0) {
        fetch("http://localhost:3001/updateheight", {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ height_new }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              alert(data.error);
            } else {
              getTraineeTable();
            }
          });
      } else {
        alert("Invalid input! Please enter a valid height");
      }
    }
  };

  const handleCalorie = (event) => {
    if (datecalorie == "") {
      alert("Select Date");
    }
    if (inputcalorie == "") {
      alert("Select Calories");
    }
    event.preventDefault();
    fetch("http://localhost:3001/updatecalorie", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ datecalorie, meal, inputcalorie }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.active) {
          navigate("/login");
        } else {
          if (data.error) {
            alert(data.error);
          }
          getCalorie();
        }
      });
  };

  const handleExercise = (event) => {
    event.preventDefault();
    if (dateexercise == "") {
      alert("Select Date");
    }
    if (duration == "") {
      alert("Select Duration");
    }
    fetch("http://localhost:3001/updateexercise", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputexercise, dateexercise, duration }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.active) {
          navigate("/login");
        } else {
          getExercises();
          getTraineeTable();
        }
      });
  };

  const getCalorie = () => {
    fetch(`http://localhost:3001/getcalorie/${id}`, {
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
          let calinfo = [0, 0, 0, 0, 0];
          for (var i = 0; i < 5; i++) {
            if (data.calories[i]) {
              calinfo[5 - i + 1] = JSON.parse(data.calories[i].avg_calories);
            }
          }
          setCalorie(calinfo);
        }
      });
  };

  const getTraineeTable = () => {
    fetch(`http://localhost:3001/gettt/${id}`, {
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
          setactivityLevel(data.activitylevel);
          setHeight(data.height);
          setWeight(data.weight);
          setBmi(data.weight / (data.height * data.height));
          if (data.activitylevel == 1) {
            setactivityLevelType("Sedentary");
          } else if (data.activitylevel == 2) {
            setactivityLevelType("Lightly Active");
          } else if (data.activitylevel == 3) {
            setactivityLevelType("Moderately Active");
          } else if (data.activitylevel == 4) {
            setactivityLevelType("Very Active");
          } else {
            setactivityLevelType("Extremely Active ");
          }
        }
      });
  };

  const getExercises = () => {
    fetch(`http://localhost:3001/getexercises/${id}`, {
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
          let exerinfo = [];
          for (let i = 0; i < data.exercises.length; i++) {
            exerinfo.push({ id: i, content: data.exercises[i].exercise_type });
          }
          setExercises(data.exercises);
        }
      });
  };

  useEffect(() => {
    if (!user_id) {
      getUserInfo();
      getExercises();
      getCalorie();
      getTraineeTable();
    }
  }, []);

  if (user_id) {
    return (
      <div class="container">
        <button
          className="homeicn"
          type="button"
          onClick={() => navigate("/home")}
        >
          {<HomeIcon />}
        </button>

        <div class="row">
          <div
            class="col-sm-5"
            style={{ marginTop: "6px", marginLeft: "60px" }}
          >
            <GradientSVG />
            <VictoryChart
              animate={{
                duration: 1000,
                onLoad: { duration: 500 },
              }}
              // style={{background: { fill: "pink", }}}
            >
              <VictoryAxis
                label="Last 5 Days Calorie Intake"
                tickFormat={() => ""}
              />
              {/* <VictoryLabel
              text={"CALORIE INTAKE"}
              x={105}
              y={100}
              textAnchor="middle"
              style={{ fontSize: 25, fill: "#0d6efd", fontWeight: "500" }}
            /> */}

              <VictoryLine
                interpolation="natural"
                style={{ data: { stroke: `url(#${idCSS})` } }}
                data={calorie}
              />
            </VictoryChart>
          </div>

          <div
            class="col-sm-3"
            style={{
              paddingTop: "10px",
              paddingLeft: "50px",
              marginTop: "6px",
            }}
          >
            <GradientSVG />
            <CircularProgressbar
              speed={3}
              strokeWidth={15}
              value={activityLevel * 15}
              text={"Activity"}
              styles={{
                path: { stroke: `url(#${idCSS})`, height: "100%" },
                trail: {
                  stroke: "#2e2e2e",
                },
              }}
            />
            <h3
              style={{
                textAlign: "center",
                border: "dotted",
                marginTop: "9px",
              }}
            >
              Activity Level: {activityLevelType}
            </h3>
          </div>

          <div
            class="col-sm-3"
            style={{ paddingTop: "50px", paddingLeft: "50px" }}
          >
            <GaugeChart
              id="gauge-chart5"
              hideText={true}
              nrOfLevels={420}
              arcsLength={[0.336, 0.118, 0.091, 0.091, 0.091, 0.273]}
              colors={[
                "#00BFFF",
                "#5BE12C",
                "#ADFF2F",
                "#F5CD19",
                "#FF8C00",
                "#EA4228",
              ]}
              percent={bmi / 100}
              arcPadding={0.02}
            />
            <button
              onClick={() => changeHeight()}
              style={{
                width: "100%",
                fontSize: "25px",
                fontWeight: "bold",
                border: "dotted",
                textAlign: "center",
                background: "transparent",
              }}
            >
              Height: {height}
            </button>
            <button
              onClick={() => changeWeight()}
              style={{
                width: "100%",
                fontSize: "25px",
                fontWeight: "bold",
                border: "dotted",
                textAlign: "center",
                background: "transparent",
              }}
            >
              Weight: {weight}
            </button>
            <h3 style={{ textAlign: "center", border: "dotted" }}>
              BMI: {Math.round(bmi)}
            </h3>
            <table style={{ textAlign: "center", width: "100%" }}>
              <thead style={{ border: "solid" }}>
                <tr>
                  <th>BMI</th>
                  <th>Classification</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ border: "solid" }}>
                  <td>&lt;18.5</td>
                  <td>Under Weight</td>
                </tr>
                <tr style={{ border: "solid" }}>
                  <td>18.5 - 24.9</td>
                  <td>Normal</td>
                </tr>
                <tr style={{ border: "solid" }}>
                  <td>25 - 29.9</td>
                  <td>Over Weight</td>
                </tr>
                <tr style={{ border: "solid" }}>
                  <td>30 - 34.9</td>
                  <td>Obesity Class 1</td>
                </tr>
                <tr style={{ border: "solid" }}>
                  <td>35 - 39.9</td>
                  <td>Obesity Class 2</td>
                </tr>
                <tr style={{ border: "solid" }}>
                  <td>&gt;40</td>
                  <td>Extreme Obesity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="row">
          {user_id == id ? (
            <div className="col-sm-3" style={{ left: "10px" }}>
              <div className="mx-auto align-self-center">
                <form
                  onSubmit={handleCalorie}
                  className="form-horizontal"
                  method="POST"
                >
                  <div className="form-group mb-2">
                    <label htmlFor="inpcalorie">
                      {" "}
                      <b> Calories: </b>{" "}
                    </label>
                    <div className="col-sm-auto">
                      <input
                        value={inputcalorie}
                        onChange={(e) => setInpCalorie(e.target.value)}
                        className="form-control"
                        type="number"
                        placeholder="Calorie"
                        id="inpcalorie"
                        name="inpcalorie"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="datecalorie">
                      {" "}
                      <b> Date: </b>{" "}
                    </label>
                    <div className="col-sm-auto">
                      <input
                        value={datecalorie}
                        onChange={(e) => setDateCalorie(e.target.value)}
                        className="form-control"
                        type="date"
                        placeholder="dd/mm/yy"
                        id="datecalorie"
                        name="datecalorie"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="meal">
                      {" "}
                      <b> Meal: </b>{" "}
                    </label>
                    <div className="col-sm-auto">
                      <select
                        id="dropdown"
                        value={meal}
                        onChange={(e) => setMeal(e.target.value)}
                      >
                        <option value="breakfast">breakfast</option>
                        <option value="lunch">lunch</option>
                        <option value="dinner">dinner</option>
                      </select>
                    </div>
                  </div>
                  <button className="btn btn-primary"> Submit </button>
                </form>
              </div>
            </div>
          ) : (
            <div></div>
          )}

          {user_id == id ? (
            <div className="col-sm-3" style={{ left: "10px" }}>
              <div className="mx-auto align-self-center">
                <form
                  onSubmit={handleExercise}
                  className="form-horizontal"
                  method="POST"
                >
                  <div className="form-group mb-2">
                    <label htmlFor="inputexercise">
                      {" "}
                      <b> Exercise Type: </b>{" "}
                    </label>
                    <div className="col-sm-auto">
                      <select
                        id="dropdown"
                        value={inputexercise}
                        onChange={(e) => setInpExercise(e.target.value)}
                      >
                        <option value="running">running</option>
                        <option value="swimming">swimming</option>
                        <option value="yoga">yoga</option>
                        <option value="weightlifting">weightlifting</option>
                        <option value="cycling">cycling</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="dateexercise">
                      {" "}
                      <b> Date: </b>{" "}
                    </label>
                    <div className="col-sm-auto">
                      <input
                        value={dateexercise}
                        onChange={(e) => setDateExercise(e.target.value)}
                        className="form-control"
                        type="date"
                        placeholder="dd/mm/yy"
                        id="dateexercise"
                        name="dateexercise"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="duration">
                      {" "}
                      <b> Duration: </b>{" "}
                    </label>
                    <div className="col-sm-auto">
                      <input
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Duration(in minutes)"
                        id="duration"
                        name="duration"
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary"> Submit </button>
                </form>
              </div>
            </div>
          ) : (
            <div></div>
          )}

          <div class="col-sm-6">
            <table
              style={{
                marginTop: "20px",
                textAlign: "center",
                width: "100%",
                border: "solid",
              }}
            >
              <thead
                style={{ textAlign: "center", width: "100%", border: "solid" }}
              >
                <tr>
                  <th>Date</th>
                  <th>Exercise Type</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.date.split("T")[0]}</td>
                      <td>{item.exercise_type}</td>
                      <td>{item.duration}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

export default Progress;
