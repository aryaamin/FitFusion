import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ListGroup from "react-bootstrap/ListGroup";

const TrainerProgress = () => {
  const [trainee, setTrainee] = useState([]);

  const navigate = useNavigate();

  const getTrainees = () => {
    fetch("http://localhost:3001/gettrainees", {
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
          console.log(data.info);
          setTrainee(data.info);
        }
      });
  };


  useEffect(() => {
    getTrainees();
  }, []);

  return (
    <div class="contianer">
      <button
        className="homeicn"
        type="button"
        style={{marginLeft: "10px"}}
        onClick={() => navigate("/home")}
      >
        {<HomeIcon />}
      </button>

      <div class="row">
        <div class="col-sl-3" style={{ marginTop: "6px", marginLeft: "60px" }}>
          <h3>Check progress for trainees</h3>
          <ListGroup as="ol" numbered>
            {trainee.map((item, index) => (
              <ListGroup.Item as="li" key={index}>
                <a href={`/trainee/progress/${item.user_id}`}>{item.name}</a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default TrainerProgress;
