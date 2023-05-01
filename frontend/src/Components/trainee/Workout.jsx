import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ListGroup from "react-bootstrap/ListGroup";

const Workout = () => {
  const [dietplan, setDietplan] = useState([]);
  const [exerciseplan, setExerciseplan] = useState([]);

  const navigate = useNavigate();

  const getDietPlan = () => {
    fetch("http://localhost:3001/getdietplan", {
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
          console.log(data);
          let dietdesc = [];
          for (let i = 0; i < data.plan.length; i++) {
            dietdesc.push(data.plan[i].plan_description);
          }
          setDietplan(dietdesc);
        }
      });
  };

  const getExercisePlan = () => {
    fetch("http://localhost:3001/getexerciseplan", {
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
          let exdesc = [];
          for (let i = 0; i < data.plan.length; i++) {
            exdesc.push(data.plan[i].plan_description);
          }
          setExerciseplan(exdesc);
        }
      });
  };

  useEffect(() => {
    getDietPlan();
    getExercisePlan();
  }, []);

  return (
    <div class="contianer">
      <button
        className="homeicn"
        type="button"
        style={{ marginLeft: "10px" }}
        onClick={() => navigate("/home")}
      >
        {<HomeIcon />}
      </button>

      <div class="row">
        <div class="col-sm-5" style={{ marginTop: "6px", marginLeft: "60px" }}>
          <h3>DIET PLANS</h3>
          <ListGroup as="ol" numbered>
            {dietplan.map((item, index) => (
              <ListGroup.Item as="li" key={index}>
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div class="col-sm-5" style={{ marginTop: "6px", marginLeft: "60px" }}>
          <h3>EXERCISE PLANS</h3>
          <ListGroup>
            {exerciseplan.map((item, index) => (
              <ListGroup.Item key={index}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Workout;
