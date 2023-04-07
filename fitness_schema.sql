drop table Calorie_Intake;
drop table Exercise;
drop table Diet_Plan;
drop table Exercise_Plan;
drop table Trainee;
drop table Trainer;
drop table Dietician;
drop table Users;

REVOKE USAGE ON SCHEMA public FROM dietician_role, trainer_role, trainee_role;
drop role dietician_role;
drop role trainee_role;
drop role trainer_role;

-- CREATE OR REPLACE FUNCTION calculate_calories_per_minute(exercise_type VARCHAR)
-- RETURNS INTEGER AS $$
-- BEGIN
--   RETURN CASE 
--     -- remaining to add all cases
--     WHEN exercise_type = 'running' THEN 10
--     WHEN exercise_type = 'swimming' THEN 12
--     WHEN exercise_type = 'cycling' THEN 8
--     ELSE 0
--   END;
-- END;
-- $$ LANGUAGE plpgsql IMMUTABLE;


-- CREATE OR REPLACE FUNCTION update_calories_burned()
-- RETURNS TRIGGER AS $$
-- BEGIN
--   NEW.calories_burned := calculate_calories_burned(NEW.exercise_type, NEW.duration);
--   RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;



CREATE TABLE Users (
  user_id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(50) NOT NULL,
  height DECIMAL NOT NULL CHECK (height > 0),
  weight DECIMAL NOT NULL CHECK (weight > 0),
  age INTEGER NOT NULL CHECK (age >= 0),
  gender VARCHAR(10) NOT NULL CHECK (gender IN ('male', 'female', 'other'))
);

CREATE TABLE Trainee (
  trainee_id INTEGER PRIMARY KEY,
  user_id INTEGER REFERENCES Users(user_id),
  activity_level INTEGER NOT NULL CHECK (activity_level >= 1 AND activity_level <= 5),
  goal VARCHAR(50) NOT NULL CHECK (goal IN ('lose weight', 'gain weight', 'maintain weight', 'build muscle'))
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
  dietician_id INTEGER REFERENCES Dietician(dietician_id),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  plan_description TEXT NOT NULL CHECK (LENGTH(plan_description) > 0)
);

CREATE INDEX plan_idx ON Diet_Plan (trainee_id, dietician_id, start_date, end_date);

CREATE TABLE Exercise_Plan (
  plan_id INTEGER PRIMARY KEY,
  trainee_id INTEGER REFERENCES Trainee(trainee_id),
  trainer_id INTEGER REFERENCES Trainer(trainer_id),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  plan_type VARCHAR(200) NOT NULL CHECK (LENGTH(plan_type) > 0),
  plan_description TEXT NOT NULL CHECK (LENGTH(plan_description) > 0)
);

CREATE INDEX ex_plan_idx ON Exercise_Plan (trainee_id, trainer_id, start_date, end_date);

--Triggers

--Update Calories_burned after change in the Exercise table
-- CREATE TRIGGER update_calories_burned_trigger
-- AFTER UPDATE ON Exercise
-- FOR EACH ROW
-- EXECUTE FUNCTION update_calories_burned();


-- BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- ALTER TABLE Exercise ADD COLUMN calories_per_minute INTEGER;

-- UPDATE Exercise SET calories_per_minute = calculate_calories_per_minute(exercise_type);

-- COMMIT;


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