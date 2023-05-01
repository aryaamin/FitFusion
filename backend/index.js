const bodyParser = require("body-parser");
const express = require("express");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const app = express();
const cors = require("cors");
const port = 3001;
const bcrypt = require("bcrypt");
const UserPass = require("./Models/userPass_query");
const User = require("./Models/user_query");
const Trainee = require("./Models/trainee_query");
const Trainer = require("./Models/trainer_query");
const Dietician = require("./Models/dietician_query");

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

app.get("/gettrainees", async (req, res) => {
  if (req.session.userid) {
    const userid = req.session.userid;

    const user = new User(userid);
    let role = (await user.getInfo()).user_role;

    let query;
    if (role == "trainer") {
        query = new Trainer(userid);
    } else if (role == "dietician") {
        query = new Dietician(userid);
    }

    let info = await query.getTrainees();
    res.json({
      active: true,
      info: info,
    });
  } else {
    return res.json({ active: false });
  }
});

app.get("/getplans", async (req, res) => {
  if (req.session.userid) {
    const userid = req.session.userid;

    const user = new User(userid);
    let role = (await user.getInfo()).user_role;

    let query;
    if (role == "trainer") {
        query = new Trainer(userid);
    } else if (role == "dietician") {
        query = new Dietician(userid);
    }

    let info = await query.getPlans();
    res.json({
      active: true,
      info: info,
    });
  } else {
    return res.json({ active: false });
  }
});

app.post("/deleteplan", async (req, res) => {
  if (req.session.userid) {
    const userid = req.session.userid;

    const user = new User(userid);
    let role = (await user.getInfo()).user_role;

    let query;
    if (role == "trainer") {
        query = new Trainer(userid);
    } else if (role == "dietician") {
        query = new Dietician(userid);
    }

    let info = await query.deletePlan(req.body.planid);
    res.json({
      active: true,
      info: info,
    });
  } else {
    return res.json({ active: false });
  }
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

app.post("/getcalorie/:id", async (req, res) => {
  if (req.session.userid && req.params.id) {
    const userid = req.params.id;
    const trainee = new Trainee(userid);
    let calinfo = await trainee.getCalorie();
    res.json({
      active: true,
      calories: calinfo,
    });
  } else {
    return res.json({ active: false });
  }
});

app.post("/getdietplan/", async (req, res) => {
  if (req.session.userid) {
    const userid = req.session.userid;
    const trainee = new Trainee(userid);
    let dietplan = await trainee.getDietPlan();
    res.json({
      active: true,
      plan: dietplan,
    });
  } else {
    return res.json({ active: false });
  }
});

app.post("/getexerciseplan", async (req, res) => {
  if (req.session.userid) {
    const userid = req.session.userid;
    const trainee = new Trainee(userid);
    let exerciseplan = await trainee.getExercisePlan();
    res.json({
      active: true,
      plan: exerciseplan,
    });
  } else {
    return res.json({ active: false });
  }
});

app.post("/addmeal", async (req, res) => {
  if (req.session.userid) {
    const { startDate, endDate, description, id } = req.body;
    const trainee = new Trainee(id);

    let error = await trainee.addMeal(startDate, endDate, description);

    if(error){
      res.json({
        active: true,
        error: error,
      });
    }
    else{
      res.json({
        active: true,
      });
    }
  } else {
    return res.json({ active: false });
  }
});

app.post("/addexerciseplan", async (req, res) => {
  if (req.session.userid) {
    const { startDate, endDate, description, id } = req.body;
    const trainee = new Trainee(id);

    let error = await trainee.addExercisePlan(startDate, endDate, description);

    if(error){
      res.json({
        active: true,
        error: error,
      });
    }
    else{
      res.json({
        active: true,
      });
    }
  } else {
    return res.json({ active: false });
  }
});

app.post("/updatecalorie", async (req, res) => {
  if (req.session.userid) {
    const userid = req.session.userid;
    const trainee = new Trainee(userid);
    const { datecalorie, meal, inputcalorie } = req.body;
    let error = await trainee.updateCalorie(userid, datecalorie, meal, inputcalorie);
    if(error){
      res.json({
        active: true,
        error: "Unable to Submit",
      });
    }
    else{
      res.json({
        active: true,
      });
    }
  } else {
    return res.json({ active: false });
  }
});

app.post("/updateexercise", async (req, res) => {
  if (req.session.userid) {
    const userid = req.session.userid;
    const trainee = new Trainee(userid);
    const { inputexercise, dateexercise, duration } = req.body;
    let error = await trainee.updateExercise(userid, dateexercise, inputexercise, duration);
    if(error){
      res.json({
        active: true,
        error: "Unable to Submit",
      });
    }
    else{
      res.json({
        active: true,
      });
    }
  } else {
    return res.json({ active: false });
  }
});


app.post("/gettt/:id", async (req, res) => {
  if (req.session.userid && req.params.id) {
    const userid = req.params.id;
    const trainee = new Trainee(userid);
    let ttinfo = await trainee.getTraineeTable();

    if (ttinfo) {
        res.json({
          active: true,
          goal: ttinfo["goal"],
          activitylevel: ttinfo["activity_level"],
          height: ttinfo["height"],
          weight: ttinfo["weight"],
        });
    }
  } else {
    return res.json({ active: false });
  }
});

app.post("/editinfo", async (req, res) => {
  if (req.session.userid) {
    let { name, password, email, age, gender } = req.body;
    password = await bcrypt.hash(password, 1);
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

app.post("/updateheight", async (req, res) => {
  const userid = req.session.userid;
  const user = new Trainee(userid);
  await user.updateHeight(req.body.height_new);
  res.json({error:false});
});

app.post("/updateweight", async (req, res) => {
  const userid = req.session.userid;
  const user = new Trainee(userid);
  await user.updateWeight(req.body.weight_new);
  res.json({error:false});
});


app.post("/getexercises/:id", async (req, res) => {
  if (req.session.userid && req.params.id) {
    const userid = req.params.id;
    const trainee = new Trainee(userid);
    let exercises = await trainee.getExercises();
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
    const user = new Trainee(userid);
    let trainerinfo = await user.getTrainerInfo();
    if(trainerinfo){
      res.json({
        active: true,
        assigned: true,
        trainerinfo: trainerinfo
      });
    }
    else{
      res.json({
        active: true,
        assigned: false,
      });
    }
    
  }
  else{
    return res.json({ active: false });
  }
});

app.post("/dieticianinfo", async (req, res) => {
  if (req.session.userid) {
    const userid = req.session.userid;
    const user = new Trainee(userid);
    let dieticianinfo = await user.getDieticianInfo();
    if(dieticianinfo){
      res.json({
        active: true,
        assigned: true,
        dieticianinfo: dieticianinfo
      });
    }
    else{
      res.json({
        active: true,
        assigned: false,
      });
    }
  }
  else{
    return res.json({ active: false });
  }
});

app.post("/availabletrainers", async (req, res) => {
  const userid = req.session.userid;
  const user = new User(userid);
  let trainers = await user.availableTrainers();
  res.json({
    trainers: trainers
  });
});

app.post("/availabledieticians", async (req, res) => {
  const userid = req.session.userid;
  const user = new User(userid);
  let dieticians = await user.availableDieticians();
  res.json({
    dieticians: dieticians
  });
});

app.post("/update_trainer", async (req, res) => {
  const userid = req.session.userid;
  const user = new User(userid);
  await user.update_trainer(req.body.trainer_id);
  res.json({error:false});
});

app.post("/update_dietician", async (req, res) => {
  const userid = req.session.userid;
  const user = new User(userid);
  await user.update_dietician(req.body.dietician_id);
  res.json({error:false});
});

app.post("/register", async (req, res) => {
  if (req.session.userid) {
    //do nothing
  } else {
    let {name, password, email, age, gender, role, height, weight, goal, activity} = req.body;
    const user = new User("");

    password = await bcrypt.hash(password, 1);
    const result = await user.createUser(name, password, email, age, gender, role, height, weight, goal, activity);

    if (result && result.id) {
      req.session.userid = result.id;
      req.session.save();

      res.send({});
      console.log("REGISTRATION SUCCESSFULL");
    } else {
      return res.json({ error: result.error });
    }
  }
});

app.post("/login", async (req, res) => {
  if (req.session.userid) {
    //do nothing
  } else {
    const { email, password } = req.body;
    const user = new UserPass(email);
    const result = await user.verifyPassword(password);

    if (result) {
      req.session.userid = result;
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
