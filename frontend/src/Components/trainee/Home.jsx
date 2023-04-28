import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import EditIcon from "@mui/icons-material/Edit";


const Home = () => {
  const [role, setRole] = useState("");
  // const [xdata, setData] = useState({labels: [], datasets: []});
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

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
          setChecked(true);
        }
      });
  };

  useEffect(() => {
    if (!checked) {
        getUserInfo();
    }
  }, []);

    if (!checked) {
        return (<div>
                    Loading
                </div>
        );
    } else {
        if (role == "trainee") {
            return (<div>
                    <div className="container my-3 py-5">
                    <button className="logout" type="button" onClick={() => handleLogout()}>{<LogoutRoundedIcon />}</button>
                    <button className="editbtn" type="button" onClick={() => navigate("/trainee/editinfo")} >{<EditIcon />}</button>
                      <h1 className="text-center" style={{fontWeight: 900}}>WELCOME {name.toUpperCase()}</h1>
                      <div className="row justify-content-center">
                        <div className="text-center">
                          <div className="p-1">
                            <div className="text-grow" id="button">
                              <a href="/workout" className="btn-2 btn-blue btn-bg-workout"><p>Workouts</p></a>
                            </div>
                          </div>
                          <div className="">
                            <div className="text-grow" id="button">
                              <a href="progress" className="btn-2 btn-blue btn-bg-progress"><p>Progress</p></a>
                            </div>
                          </div>
                          <div className="">
                            <div className="text-grow" id="button">
                              <a href="dieticianinfo" className="btn-2 btn-blue btn-bg-dietician"><p>Dieticians</p></a>
                            </div>
                          </div>
                          <div className="p-1">
                            <div className="text-grow" id="button">
                              <a href="trainerinfo" className="btn-2 btn-blue btn-bg-trainer"><p>Trainers</p></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                </div>);
        } else {
            navigate("/trainer/home");
        }
    }
};

export default Home;
