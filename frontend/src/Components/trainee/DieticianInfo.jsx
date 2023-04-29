import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { ListGroup } from 'react-bootstrap';

const Dieticianinfo = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState("");
  const [dieticians, setdieticians] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getDieticianinfo = () => {
    fetch("http://localhost:3001/dieticianinfo", {
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
            setInfo(data.dieticianinfo);
        }
      });
  };

  const getDieticians = () => {
    fetch("http://localhost:3001/availabledieticians", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setdieticians(data.dieticians);
      });
  };

  useEffect(() => {
    getDieticianinfo();
    getDieticians();
  }, []);


  const handleUpdate = async (dietician_id) => {
    const update = window.confirm("Change your Dietician?");
    if(update){
      await fetch("http://localhost:3001/update_dietician", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({dietician_id:dietician_id}),
      })
      .then((res) => res.json())
      .then((data) => {
          console.log("Updated Sucessfully");
          getDieticianinfo();
      });
      
    }
    
  };


  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredUsers = dieticians.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container">
        <button className="homeicn" type="button" onClick={() => navigate("/home")}>{<HomeIcon />}</button>
        <div className="row">
        <div className="col-sm-6 py-5" style={{fontSize: "x-large"}}>
        <h2> Current Dietician </h2>
        <table>
            <tbody>
            <tr>
                <td style={{fontWeight: "bold"}}>Name: </td>
                <td>{info.name}</td>
            </tr>
            <tr>
                <td style={{fontWeight: "bold"}}>Email: </td>
                <td>{info.email}</td>
            </tr>
            <tr>
                <td style={{fontWeight: "bold"}}>Age: </td>
                <td>{info.age}</td>
            </tr>
            <tr>
                <td style={{fontWeight: "bold"}}>Gender: </td>
                <td>{info.gender}</td>
            </tr>
            </tbody>
        </table>

        </div>

        <div className="col-sm-5 py-5">
        <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchValue}
        onChange={handleSearchChange}
        style={{
          border: '1px solid #ced4da',
          borderRadius: '4px',
          padding: '5px',
          width: '100%'
        }}
      />
      <ListGroup style={{height: '70vh', overflowY: 'auto'}}>
        {filteredUsers.map((user) => (
          <ListGroup.Item 
            key={user.user_id} 
            onClick={() => handleUpdate(user.user_id)}
            style={{cursor: 'pointer'}}
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

export default Dieticianinfo;
