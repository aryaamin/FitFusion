import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Form, Button, ListGroup } from 'react-bootstrap';

const TrainerExercisePlan = () => {
  const [trainee, setTrainee] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedTrainee, setSelectedTrainee] = useState("");
  const [description, setDescription] = useState("");

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
          setTrainee(data.info);
        }
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      let id;
      for (let item in trainee) {
          item = trainee[item];
          if (item.name == selectedTrainee) {
              id = item.user_id;
              break;
          }
      }

      let data = {startDate, endDate, id, description};

      fetch("http://localhost:3001/addexerciseplan", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.active) {
            navigate("/login");
          } else {
              if (data.error) {
                  alert(data.error);
              } else {
                  alert(`Successfully added an exercise plan for trainee ${selectedTrainee}`);
              }
          }
        });

  }


  useEffect(() => {
    getTrainees();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3" style={{ marginTop: "6px", marginLeft: "60px" }}>
          <h3>Trainees</h3>
          <ListGroup as="ol" numbered>
            {trainee.map((item, index) => (
              <ListGroup.Item as="li" key={index}>
                <a href={`/trainee/progress/${item.user_id}`}>{item.name}</a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        <div className="col-sm-6">
          <h3>Add Exercise Plan</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formStartDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter start date"
                value={startDate}
                onChange={(e) => {setStartDate(e.target.value)}}
              />
            </Form.Group>

            <Form.Group controlId="formEndDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter end date"
                value={endDate}
                onChange={(e) => {setEndDate(e.target.value)}}
              />
            </Form.Group>

            <Form.Group controlId="formSelect">
              <Form.Label>Select Trainee</Form.Label>
              <Form.Control as="select" value={selectedTrainee} onChange={(e) => {setSelectedTrainee(e.target.value)}}>
                <option>Select a trainee </option>
                {trainee.map((item, index) => (
                    <option>{item.name}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={description}
                onChange={(e) => {setDescription(e.target.value)}}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default TrainerExercisePlan;
