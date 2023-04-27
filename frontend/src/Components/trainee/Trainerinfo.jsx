import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Trainerinfo = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [trainers, settrainers] = useState([]);


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
          setInfo(data.trainerinfo);
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

  const handleSearch = (string, results) => {
    setSearchResults(results);
    console.log(trainers);
  };

  const handleUpdate = async (trainer_id) => {
    console.log("holahoal",trainer_id);
    await fetch("http://localhost:3001/update_trainer", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({trainer_id:trainer_id}),
    })
      .then((res) => res.json())
      .then((data) => {
          alert("Updated Sucessfully");
          navigate("/home");
      });
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div>
        <h2> Current Trainer </h2>
        <table>
            <tbody>
            <tr>
                <td>Name:</td>
                <td>{info.name}</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>{info.email}</td>
            </tr>
            <tr>
                <td>Age:</td>
                <td>{info.age}</td>
            </tr>
            <tr>
                <td>Gender:</td>
                <td>{info.gender}</td>
            </tr>
            </tbody>
        </table>

        <div 
        style={{
          width: 400,
          margin: 20,
        }}
        >
        <ReactSearchAutocomplete
          placeholder="Search Available Trainers"
          items={trainers}
          fuseOptions={{
            ignoreLocation: true,
            keys: ["name"], // add more categories for search
            minMatchCharLength: 1,
            threshold: 0,
          }}

         
          onSearch={handleSearch}
        />
      </div>

      {searchResults.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Trainer Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Specialization</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((trainer) => (
              <tr key={trainer.user_id}>
                <td>{trainer.name}</td>
                <td>{trainer.age}</td>
                <td>{trainer.gender}</td>
                <td>"Change Schema for this"</td>
                <td>
                  <button
                    onClick={() =>
                      handleUpdate(trainer.user_id)
                    }
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    <br></br>
    <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default Trainerinfo;
