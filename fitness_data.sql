delete from Calorie_Intake;
delete from Exercise;
delete from Diet_Plan;
delete from Exercise_Plan;
delete from Trainee;
delete from Trainer;
delete from Dietician;
delete from Users;

INSERT INTO Users (user_id, name, email, password, height, weight, age, gender)
VALUES 
(1, 'John Doe', 'johndoe@gmail.com', 'password123', 1.85, 80.0, 32, 'male'),
(2, 'Jane Smith', 'janesmith@yahoo.com', 'letmein', 1.6, 60.0, 25, 'female'),
(3, 'Bob Johnson', 'bjohnson@hotmail.com', 'password321', 1.75, 90.0, 45, 'male'),
(4, 'Sara Lee', 'slee@gmail.com', '12345', 1.68, 55.0, 28, 'female'),
(5, 'Mike Brown', 'mbrown@gmail.com', 'qwerty', 1.8, 75.0, 39, 'male');

INSERT INTO Trainee (trainee_id, user_id, activity_level, goal)
VALUES 
(1, 1, 3, 'lose weight'),
(2, 2, 2, 'maintain weight'),
(3, 3, 1, 'build muscle'),
(4, 4, 2, 'lose weight'),
(5, 5, 3, 'build muscle');

INSERT INTO Trainer (trainer_id, user_id)
VALUES 
(1, 5),
(2, 3),
(3, 1),
(4, 2),
(5, 4);

INSERT INTO Dietician (dietician_id, user_id)
VALUES 
(1, 4),
(2, 1),
(3, 5),
(4, 2),
(5, 3);

INSERT INTO Calorie_Intake (intake_id, trainee_id, date, meal_type, calories)
VALUES 
(1, 1, '2023-04-01', 'breakfast', 400),
(2, 2, '2023-04-01', 'lunch', 600),
(3, 3, '2023-04-02', 'dinner', 800),
(4, 4, '2023-04-03', 'snack', 200),
(5, 5, '2023-04-04', 'breakfast', 500);

INSERT INTO Exercise (exercise_id, trainee_id, date, exercise_type, duration)
VALUES 
(1, 1, '2023-04-01', 'running', 30),
(2, 2, '2023-04-02', 'weightlifting', 45),
(3, 3, '2023-04-03', 'yoga', 60),
(4, 4, '2023-04-04', 'cycling', 45),
(5, 5, '2023-04-05', 'swimming', 60);

INSERT INTO Diet_Plan (trainee_id, dietician_id, start_date, end_date, plan_description, plan_id)
VALUES
(1, 2, '2023-04-07', '2023-04-13', 'This plan consists of a high protein diet with low carbs and moderate fat.', 1),
(2, 3, '2023-04-07', '2023-04-13', 'This plan consists of a balanced diet with equal portions of proteins, carbs, and fats.', 2),
(3, 1, '2023-04-07', '2023-04-13', 'This plan consists of a low-fat diet with moderate carbs and high protein intake.', 3),
(4, 2, '2023-04-07', '2023-04-13', 'This plan consists of a high-carb diet with moderate protein and low fat.', 4),
(5, 3, '2023-04-07', '2023-04-13', 'This plan consists of a low-carb diet with high protein and moderate fat.', 5);


INSERT INTO Exercise_Plan (plan_id, trainee_id, trainer_id, start_date, end_date, plan_type, plan_description)
VALUES
(1, 2, 3, '2023-04-07', '2023-04-13', 'yoga and pilates', 'This plan includes a combination of yoga and pilates for flexibility and core strength.'),
(2, 3, 1, '2023-04-07', '2023-04-13', 'cardio and strength training', 'This plan includes cardio for fat burning and strength training for muscle gain.'),
(3, 4, 2, '2023-04-07', '2023-04-13', 'running and weightlifting', 'This plan includes a combination of running and weightlifting for overall fitness.'),
(4, 1, 2, '2023-04-07', '2023-04-13', 'strength training and cardio', 'This plan includes strength training for upper body and cardio for lower body.'),
(5, 5, 3, '2023-04-07', '2023-04-13', 'HIIT', 'This plan includes HIIT (High-Intensity Interval Training) for maximum fat burning and muscle gain.');