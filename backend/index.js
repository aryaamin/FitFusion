const bodyParser = require("body-parser");
const express = require("express");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const app = express();
const cors = require("cors");
const port = 3001;
const UserPass = require("./Models/userPass_query");
const User = require("./Models/user_query");

const oneDay = 1000 * 60 * 60 * 24;
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//session middleware
app.use(
  sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));

app.use(cookieParser());

app.get("/check-session", (req, res) => {
  if (req.session.userid) {
    return res.json({ active: true });
  } else {
    return res.json({ active: false });
  }
});



app.get("/logout", (req, res) => {
  req.session.destroy();
  return res.json({});
});

app.post("/getuserinfo", async (req, res) => {
  if (req.session.userid) {
    const userid = req.session.userid;
    const user = new User(userid);
    let info = await user.getInfo();
    res.json({
      active: true,
      info: info,
    });
  } else {
    return res.json({ active: false });
  }
});

app.post("/getcalorie", async (req, res) => {
  if (req.session.userid) {
    const userid = req.session.userid;
    const user = new User(userid);
    let calinfo = await user.getCalorie();
    res.json({
      active: true,
      calories: calinfo,
    });
  } else {
    return res.json({ active: false });
  }
});


app.post("/gettt", async (req, res) => {
  if (req.session.userid) {
    const userid = req.session.userid;
    const user = new User(userid);
    let ttinfo = await user.getTraineeTable();
    res.json({
      active: true,
      goal: ttinfo["goal"],
      activitylevel: ttinfo["activity_level"],
      height: ttinfo["height"],
      weight: ttinfo["weight"],
    });
  } else {
    return res.json({ active: false });
  }
});

app.post("/editinfo", async (req, res) => {
  if (req.session.userid) {
    const { name, password, email, age, gender } = req.body;
    console.log(name);
    console.log(req.session.userid)
    const user = new User(req.session.userid);
    const result = await user.editinfo(name, password, email, age, gender);
    res.json({
      active: true,
    });
  }
  else{
    return res.json({ active: false });
  }
});


app.post("/getexercises", async (req, res) => {
  if (req.session.userid) {
    const userid = req.session.userid;
    const user = new User(userid);
    let exercises = await user.exercises();
    // console.log(exercises);
    res.json({
      active: true,
      exercises: exercises
    });
  }
  else{
    return res.json({ active: false });
  }
});

app.post("/trainerinfo", async (req, res) => {
  if (req.session.userid) {
    const userid = req.session.userid;
    const user = new User(userid);
    let trainerinfo = await user.gettrainerinfo();
    res.json({
      active: true,
      trainerinfo: trainerinfo
    });
  }
  else{
    return res.json({ active: false });
  }
});

app.post("/availabletrainers", async (req, res) => {
  const userid = req.session.userid;
  const user = new User(userid);
  let trainers = await user.availabletrainers();
  res.json({
    trainers: trainers
  });
});

app.post("/update_trainer", async (req, res) => {
  const userid = req.session.userid;
  const user = new User(userid);
  console.log(req.body.trainer_id);
  await user.update_trainer(req.body.trainer_id);
  res.json({error:false});
});


app.post("/login", async (req, res) => {
  if (req.session.userid) {
    //do nothing
  } else {
    const { username, password } = req.body;
    const user = new UserPass(username);
    const result = await user.verifyPassword(password);

    console.log(result);

    if (result) {
      req.session.userid = username;
      req.session.save();

      res.send({});
      console.log("LOGIN SUCCESSFULL");
    } else {
      return res.status(401).json({ error: "Incorrect username or password" });
    }
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
