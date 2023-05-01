import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Form, Button, ListGroup, Table } from "react-bootstrap";

const TrainerExercisePlan = () => {
  const [trainee, setTrainee] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [id, setId] = useState(0);
  const [description, setDescription] = useState("");
  const [workoutPlans, setWorkoutPlans] = useState([]);

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
          console.log(trainee); 
        }
      });
  };

  const getPlans = () => {
    fetch("http://localhost:3001/getPlans", {
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
          setWorkoutPlans(data.info);
          console.log(workoutPlans); 
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = { startDate, endDate, id, description };

    fetch("http://localhost:3001/addexerciseplan", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.active) {
          navigate("/login");
        } else {
          if (data.error) {
            alert(data.error);
          } else {
            getPlans();
            alert(`Successfully added an exercise plan`);
          }
        }
      });
  };

  const handleDelete = (planid) => {
    fetch("http://localhost:3001/deleteplan", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ planid }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.active) {
          navigate("/login");
        } else {
          if (data.error) {
            alert(data.error);
          } else {
            getPlans();
            alert(`Successfully deleted the exercise plan`);
          }
        }
      });
  };

  useEffect(() => {
    getTrainees();
    getPlans();
  }, []);

  return (
    <div className="container">
      <button
        className="homeicn"
        type="button"
        onClick={() => navigate("/home")}
      >
        {<HomeIcon />}
      </button>
      <div className="row">
        <div
          className="col-sm-3"
          style={{ marginTop: "6px", marginLeft: "60px" }}
        >
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
                required
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formEndDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter end date"
                required
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formSelect">
              <Form.Label>Select Trainee</Form.Label>
              <Form.Control
                as="select"
                required
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              >
                <option value="0">Select a trainee </option>
                {trainee.map((item, index) => (
                  <option value={item.user_id}>{item.name}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                required
                rows={3}
                placeholder="Enter description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>

      <br />
      <br />
      <br />
      {id !== 0 ? (
        <div>
          <h3>
            Current Workout Plans For{" "}
            {
              trainee.filter((t) => {
                return t.user_id == id;
              })[0].name
            }
          </h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {workoutPlans
                .filter((p) => {
                  return p.trainee_id == id;
                })
                .map((plan, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{plan.plan_description}</td>
                    <td>{plan.start_date}</td>
                    <td>{plan.end_date}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          handleDelete(plan.plan_id);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default TrainerExercisePlan;
