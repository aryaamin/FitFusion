drop table Calorie_Intake;
drop table Exercise;
drop table Diet_Plan;
drop table Exercise_Plan;
drop table Trainee;
drop table Trainer;
drop table Dietician;
drop table Users;

CREATE TABLE Users (
  user_id INTEGER PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(50),
  height DECIMAL,
  weight DECIMAL,
  age INTEGER,
  gender VARCHAR(10)
);

CREATE TABLE Trainee (
  trainee_id INTEGER PRIMARY KEY,
  user_id INTEGER REFERENCES Users(user_id),
  activity_level INTEGER,
  goal VARCHAR(50)
);

CREATE TABLE Trainer (
  trainer_id INTEGER PRIMARY KEY,
  user_id INTEGER REFERENCES Users(user_id)
);

CREATE TABLE Dietician (
  dietician_id INTEGER PRIMARY KEY,
  user_id INTEGER REFERENCES Users(user_id)
);

CREATE TABLE Calorie_Intake (
  intake_id INTEGER PRIMARY KEY,
  trainee_id INTEGER REFERENCES Trainee(trainee_id),
  date DATE,
  meal_type VARCHAR(50),
  calories INTEGER
);

CREATE TABLE Exercise (
  exercise_id INTEGER PRIMARY KEY,
  trainee_id INTEGER REFERENCES Trainee(trainee_id),
  date DATE,
  exercise_type VARCHAR(50),
  duration INTEGER,
  calories_burned INTEGER
);

CREATE TABLE Diet_Plan (
  plan_id INTEGER PRIMARY KEY,
  trainee_id INTEGER REFERENCES Trainee(trainee_id),
  dietician_id INTEGER REFERENCES Dietician(dietician_id),
  start_date DATE,
  end_date DATE,
  plan_description TEXT
);

CREATE TABLE Exercise_Plan (
  plan_id INTEGER PRIMARY KEY,
  trainee_id INTEGER REFERENCES Trainee(trainee_id),
  trainer_id INTEGER REFERENCES Trainer(trainer_id),
  start_date DATE,
  end_date DATE,
  plan_type VARCHAR(200),
  plan_description TEXT
);