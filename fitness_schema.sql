drop table Calorie_Intake;
drop table Exercise;
drop table Diet_Plan;
drop table Exercise_Plan;
drop table Trainer;
drop table Dietician;
drop table Trainee;
drop table Users;

REVOKE USAGE ON SCHEMA public FROM dietician_role, trainer_role, trainee_role;
drop role dietician_role;
drop role trainee_role;
drop role trainer_role;


CREATE TABLE Users (
  user_id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(50) NOT NULL,
  age INTEGER NOT NULL CHECK (age >= 0),
  gender VARCHAR(10) NOT NULL CHECK (gender IN ('male', 'female', 'other')),
  user_role VARCHAR(10) NOT NULL CHECK (user_role IN ('trainee', 'trainer', 'dietician'))
);

CREATE TABLE Trainee (
  trainee_id INTEGER PRIMARY KEY REFERENCES Users(user_id),
  activity_level INTEGER NOT NULL CHECK (activity_level >= 1 AND activity_level <= 5),
  goal VARCHAR(50) NOT NULL CHECK (goal IN ('lose weight', 'gain weight', 'maintain weight', 'build muscle'))
);

CREATE TABLE Trainer (
  trainer_id INTEGER,
  trainee_id INTEGER REFERENCES Trainee(trainee_id)
);

CREATE TABLE Dietician (
  dietician_id INTEGER,
  trainee_id INTEGER REFERENCES Trainee(trainee_id)
);

CREATE TABLE Calorie_Intake (
  intake_id INTEGER PRIMARY KEY,
  trainee_id INTEGER REFERENCES Trainee(trainee_id),
  date DATE NOT NULL,
  meal_type VARCHAR(50) NOT NULL CHECK (meal_type IN ('breakfast', 'lunch', 'dinner', 'snack')),
  calories INTEGER NOT NULL CHECK (calories > 0)
);

CREATE INDEX intake_idx ON Calorie_Intake (trainee_id, date);

CREATE TABLE Exercise (
  exercise_id INTEGER PRIMARY KEY,
  trainee_id INTEGER REFERENCES Trainee(trainee_id),
  date DATE NOT NULL,
  exercise_type VARCHAR(50) NOT NULL CHECK (exercise_type IN ('running', 'swimming', 'cycling', 'weightlifting', 'yoga')),
  duration INTEGER NOT NULL CHECK (duration > 0)
);

CREATE INDEX exercise_idx ON Exercise (trainee_id, date);

CREATE TABLE Diet_Plan (
  plan_id INTEGER PRIMARY KEY,
  trainee_id INTEGER REFERENCES Trainee(trainee_id),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  plan_description TEXT NOT NULL CHECK (LENGTH(plan_description) > 0)
);

CREATE INDEX plan_idx ON Diet_Plan (trainee_id, start_date, end_date);

CREATE TABLE Exercise_Plan (
  plan_id INTEGER PRIMARY KEY,
  trainee_id INTEGER REFERENCES Trainee(trainee_id),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  plan_description TEXT NOT NULL CHECK (LENGTH(plan_description) > 0)
);

CREATE INDEX ex_plan_idx ON Exercise_Plan (trainee_id, start_date, end_date);

--Roles 
CREATE ROLE dietician_role;
CREATE ROLE trainer_role;
CREATE ROLE trainee_role;

GRANT USAGE ON SCHEMA public TO dietician_role, trainer_role, trainee_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE Users TO dietician_role, trainer_role, trainee_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE Trainee TO dietician_role, trainer_role, trainee_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE Trainer TO trainer_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE Dietician TO dietician_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE Calorie_Intake TO trainee_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE Exercise TO trainee_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE Diet_Plan TO dietician_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE Exercise_Plan TO trainer_role;