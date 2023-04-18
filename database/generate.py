from faker import Faker
import random
import datetime

fake = Faker()

n = 100

# Generate random data for the Users table
users_data = []
trainee_list = []
trainer_list = []
dietician_list = []

for i in range(1, n):
    name = fake.name()
    email = fake.email()
    password = fake.password(length=10)
    age = random.randint(18, 65)
    gender = random.choice(['male', 'female', 'other'])
    role = random.choice(['trainee', 'trainer', 'dietician'])
    if(role == 'trainee'):
        trainee_list.append(i)
    if(role == 'trainer'):
        trainer_list.append(i)
    if(role == 'dietician'):
        dietician_list.append(i)
        
    users_data.append((i, name, email, password, age, gender, role))

# Generate random data for the Trainee table
trainee_data = []
for i in trainee_list:
    activity_level = random.randint(1, 5)
    height = random.randint(140, 220)/100
    weight = random.randint(300, 1300)/10
    goal = random.choice(['lose weight', 'gain weight', 'maintain weight', 'build muscle'])
    trainee_data.append((i, activity_level, height, weight, goal))

# Generate random data for the Trainer table
trainer_data = []
for i in trainee_list:
    trainer_id = random.choice(trainer_list)
    trainer_data.append((trainer_id, i))

# Generate random data for the Dietician table
dietician_data = []
for i in trainee_list:
    dietician_id = random.choice(dietician_list)
    dietician_data.append((dietician_id, i))

# Generate random data for the Calorie_Intake table
calorie_intake_data = []
for i in range(1, n):
    trainee_id = random.choice(trainee_list)
    date = fake.date_between(
        start_date='-7d', end_date='today').strftime('%Y-%m-%d')
    meal_type = random.choice(['breakfast', 'lunch', 'dinner', 'snack'])
    calories = random.randint(100, 1000)
    calorie_intake_data.append((i, trainee_id, date, meal_type, calories))

# Generate random data for the Exercise table
exercise_data = []
for i in range(1, n):
    trainee_id = random.choice(trainee_list)
    date = fake.date_between(
        start_date='-7d', end_date='today').strftime('%Y-%m-%d')
    exercise_type = random.choice(
        ['running', 'swimming', 'cycling', 'weightlifting', 'yoga'])
    duration = random.randint(10, 60)
    exercise_data.append((i, trainee_id, date, exercise_type, duration))

# Generate random data for the Diet_Plan table
diet_plan_data = []
plan_id = 0
for i in trainee_list:
    plan_id += 1
    start_date = fake.date_between(
        start_date='today', end_date='+7d').strftime('%Y-%m-%d')
    end_date = fake.date_between(
        start_date='+7d', end_date='+30d').strftime('%Y-%m-%d')
    plan_description = fake.text(max_nb_chars=200)
    diet_plan_data.append((plan_id, i, start_date, end_date, plan_description))

# Generate random data for the Exercise_Plan table
exercise_plan_data = []
plan_id = 0
for i in trainee_list:
    plan_id += 1
    start_date = fake.date_between(
        start_date='today', end_date='+7d').strftime('%Y-%m-%d')
    end_date = fake.date_between(
        start_date='+7d', end_date='+30d').strftime('%Y-%m-%d')
    plan_description = fake.text(max_nb_chars=200)
    exercise_plan_data.append(
        (plan_id, i, start_date, end_date, plan_description))
    
    
print("delete from Calorie_Intake;")
print("delete from Exercise;")
print("delete from Diet_Plan;")
print("delete from Exercise_Plan;")
print("delete from Trainer;")
print("delete from Dietician;")
print("delete from Trainee;")
print("delete from Users;\n")


print("INSERT INTO Users (user_id, name, email, password, age, gender, user_role) VALUES ")
for i in range(len(users_data)):
    if i == len(users_data) - 1:
        print(users_data[i], ";")
    else:
        print(users_data[i], ",")

print("\nINSERT INTO Trainee (trainee_id, activity_level, height, weight, goal) VALUES ")
for i in range(len(trainee_data)):
    if i == len(trainee_data) - 1:
        print(trainee_data[i], ";")
    else:
        print(trainee_data[i], ",")

print("\nINSERT INTO Trainer (trainer_id, trainee_id) VALUES ")
for i in range(len(trainer_data)):
    if i == len(trainer_data) - 1:
        print(trainer_data[i], ";")
    else:
        print(trainer_data[i], ",")

print("\nINSERT INTO Dietician (dietician_id, trainee_id) VALUES ")
for i in range(len(dietician_data)):
    if i == len(dietician_data) - 1:
        print(dietician_data[i], ";")
    else:
        print(dietician_data[i], ",")

print("\nINSERT INTO Calorie_Intake (intake_id, trainee_id, date, meal_type, calories) VALUES ")
for i in range(len(calorie_intake_data)):
    if i == len(calorie_intake_data) - 1:
        print(calorie_intake_data[i], ";")
    else:
        print(calorie_intake_data[i], ",")

print("\nINSERT INTO Exercise (exercise_id, trainee_id, date, exercise_type, duration) VALUES ")
for i in range(len(exercise_data)):
    if i == len(exercise_data) - 1:
        print(exercise_data[i], ";")
    else:
        print(exercise_data[i], ",")

print("\nINSERT INTO Diet_Plan (plan_id, trainee_id, start_date, end_date, plan_description) VALUES ")
for i in range(len(diet_plan_data)):
    if i == len(diet_plan_data) - 1:
        print(diet_plan_data[i], ";")
    else:
        print(diet_plan_data[i], ",")

print("\nINSERT INTO Exercise_Plan (plan_id, trainee_id, start_date, end_date, plan_description) VALUES ")
for i in range(len(exercise_plan_data)):
    if i == len(exercise_plan_data) - 1:
        print(exercise_plan_data[i], ";")
    else:
        print(exercise_plan_data[i], ",")
