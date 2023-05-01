import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { ListGroup } from "react-bootstrap";

const Trainerinfo = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState("");
  const [assigned, setAssigned] = useState(false);
  const [trainers, settrainers] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getTrainerinfo = () => {
    fetch("http://localhost:3001/trainerinfo", {
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
          if (data.assigned) {
            setAssigned(data.assigned);
            setInfo(data.trainerinfo);
          }
        }
      });
  };

  const getTrainers = () => {
    fetch("http://localhost:3001/availabletrainers", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        settrainers(data.trainers);
      });
  };

  useEffect(() => {
    getTrainerinfo();
    getTrainers();
  }, []);

  const handleUpdate = async (trainer_id) => {
    const update = window.confirm("Change your Trainer?");
    if (update) {
      await fetch("http://localhost:3001/update_trainer", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ trainer_id: trainer_id }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Updated Sucessfully");
          getTrainerinfo();
        });
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredUsers = trainers.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase())
  );

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
        {assigned ? (
          <div className="col-sm-6 py-5" style={{ fontSize: "x-large" }}>
            <h2> Current Trainer </h2>
            <table>
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Name: </td>
                  <td>{info.name}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Email: </td>
                  <td>{info.email}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Age: </td>
                  <td>{info.age}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold" }}>Gender: </td>
                  <td>{info.gender}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="col-sm-6 py-5" style={{ fontSize: "x-large" }}>
            <h2> No Trainer </h2>
          </div>
        )}

        <div className="col-sm-5 py-5">
          <div>
            <input
              type="text"
              placeholder="Search by name"
              value={searchValue}
              onChange={handleSearchChange}
              style={{
                border: "1px solid #ced4da",
                borderRadius: "4px",
                padding: "5px",
                width: "100%",
              }}
            />
            <ListGroup style={{ height: "70vh", overflowY: "auto" }}>
              {filteredUsers.map((user) => (
                <ListGroup.Item
                  key={user.user_id}
                  onClick={() => handleUpdate(user.user_id)}
                  style={{ cursor: "pointer" }}
                  className="list-group-item-hover"
                >
                  {user.name}, {user.age}, {user.gender}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainerinfo;
