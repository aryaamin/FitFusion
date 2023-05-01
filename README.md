# FitFusion

---
Adish Shah (200020012)\
Padakanti Akshay Kiran (200050093)\
Vivek Veer (200050158)\
Arya Amin (200050014)
---

# Instructions for running on Linux
## Setup local postgres database

### Switch to psql
sudo -i -u postgres
psql

### Create Database and connect to it
CREATE DATABASE fitness;
\c fitness

### Install schema and check tables exist
First cd to appropriate directory as postgres user
\i database/fitness_schema.sql
\d

### Load sample data
\i database/fitness_data.sql

### Check conninfo and modify config.txt in backend
\conninfo

# Overview of Application

Fitfusion is a fitness website that allows users to connect with fitness
trainers, and track their fitness progress. The website will feature a
user-friendly interface and will be accessible on web platform. The
application will allow users to create their fitness goals and find
fitness trainers who can help them achieve these goals. Trainers can
create workout plans and track the progress of their trainees.

# Users

## Fitness Trainers

Fitness trainers will be able to create and manage their profiles,
including their qualifications, experience, and areas of expertise. They
will also be able to create customized workout plans for their trainees
and track their progress.

## Trainees

Trainees will be able to create and manage their profiles, including
their fitness goals and progress. They will be able to connect with
fitness trainers who can help them achieve their goals and track their
progress towards their fitness goals.

# Data to be Stored

The following entities will be stored in the Fitfusion database:

## User

The user entity will contain information about each user, including
their name, email address, and password. It will also include their
fitness goals and chosen trainer.

## Fitness Trainer

The fitness trainer entity will contain information about each fitness
trainer, including their qualifications, experience, and areas of
expertise.

## Workout Plan

The workout plan entity will contain information about the customized
workout plans created by fitness trainers for their trainees.

## Progress

The progress entity will contain information about the progress of each
trainee towards their fitness goals.

# Application Structure

## Backend

The backend of the Fitfusion website will be built using NodeJS along
with PostgreSQL and Express for managing sessions. The main API
functionality will include:

-   User registration

    -   Endpoint : /api/register

    -   Method : POST

    -   Request Parameters:

        -   email (string): The email address of the user.

        -   password (string): The password of the user.

        -   role (string): Trainee or trainer.

    -   Return value: Success code if request is successful, error
        message if not.

-   User login

    -   Endpoint : /api/login

    -   Method : POST

    -   Request Parameters:

        -   email (string): The email address of the user.

        -   password (string): The password of the user.

    -   Return value: Success code if login is successful, error message
        if not.

### Trainee specific

-   User account management

-   Fitness trainer management

-   Trainee management

-   Workout plan management

-   Progress tracking

## UI

The web interface for for Fitfusion will be built using ReactJS. The key
user interfaces that will be supported include:

-   User registration

    -   Form elements : Registration form for registration of a user.

    -   Links : A link to the login page in case the user has already
        registered.

-   User login

    -   Form elements : Login form for logging in.

    -   Links : A link to the registration page in case the user has
        already registered.

### Trainee specific

-   Trainee dashboard

    -   Data displayed: Links to all the important interfaces in the
        application, such as user profile, trainer profile, workout
        plan, progress tracking.

    -   Form elements: None - the dashboard consists of a grid or list
        of clickable icons or buttons representing each interface, with
        a brief label or description of each interface.

    -   Links: None - this interface serves as a centralized location
        for accessing other interfaces.

-   Trainee profile

    -   Data displayed: User's name, profile picture, fitness goals, and
        any other relevant user information.

    -   Form elements: Ability for the user to edit their profile
        information, upload a profile picture.

    -   Links: Link to the user's dashboard.

-   Progress tracking

    -   Data displayed: A visual representation of progress over time in
        terms of weight, reps, and sets for a specific exercise or
        workout plan.

    -   Form elements: Ability for the user to input their progress for
        specific exercises or workout plans and view their progress over
        time.

    -   Links: Links to the user's dashboard and their assigned workout
        plans.

-   Workout plan

    -   Data displayed: Exercises, sets, reps, and any other relevant
        workout information.

    -   Form elements: Ability for the trainer to create and edit
        workout plans for their trainees, and for the trainee to view
        their assigned workout plans.

    -   Links: Links to the trainee's profile and progress tracking.

-   Trainer search

    -   Data displayed: A list of trainers who match the trainee's
        search criteria, along with their profiles and areas of
        expertise.

    -   Form elements: A search bar and filters (such as location,
        price, specialty, etc.) to allow trainees to narrow down their
        search. Clickable trainer profiles with information such as
        name, photo, bio, reviews, and specialties.

    -   Links: Links to trainer profiles and the option to contact a
        trainer to inquire about their services.

-   Meal tracking

    -   Data displayed: A record of the trainee's daily food intake,
        including details such as meal times, calorie and nutrient
        intake, and notes about meal choices and preferences.

    -   Form elements: A calendar or diary-style interface where
        trainees can log their meals and track their nutritional intake.
        Options to add notes or photos to meals, and to search for foods
        and recipes to add to the log.

    -   Links: Links to progress tracking and trainer profiles, as well
        as options to export data or generate reports on nutritional
        intake and progress towards fitness goals.

### Trainer specific

-   Trainer dashboard

    -   Data displayed: Links to all the important interfaces in the
        application, such as trainer profile, trainee progress view,
        workout plan creator, and meal tracking.

    -   Form elements: None - the dashboard consists of a grid or list
        of clickable icons or buttons representing each interface, with
        a brief label or description of each interface.

    -   Links: None - this interface serves as a centralized location
        for accessing other interfaces.

-   Trainer profile

    -   Data displayed: Trainer's name, profile picture, bio, areas of
        expertise, qualifications, and reviews.

    -   Form elements: Ability for the trainer to edit their profile
        information, upload a profile picture, and connect with
        trainees.

    -   Links: Link to the trainer dashboard, trainee profiles, and
        trainee progress tracking.

-   Trainee progress view for trainers

    -   Data displayed: A visual representation of a trainee's progress
        towards their fitness goals, including details such as weight
        loss, strength gains, and other measurements.

    -   Form elements: A graph or chart that shows progress over time,
        with options to adjust the data displayed and compare different
        metrics. Trainers should be able to view and track the progress
        of their trainees and provide feedback and recommendations.

    -   Links: Links to the workout plan creator interface and the
        trainee profile of the trainee being tracked.

-   Workout plan creator

    -   Data displayed: A personalized workout plan for a trainee,
        including details such as exercises, reps, sets, and rest
        periods.

    -   Form elements: A drag-and-drop interface where trainers can
        select and customize exercises based on trainees' goals and
        preferences. Options to adjust the difficulty level, add notes
        and feedback, and preview the plan before sharing it with a
        trainee.

    -   Links: Links to the trainee progress view interface and the
        trainee profile of the trainee the workout plan was created for.

-   Meal tracking for trainers

    -   Data displayed: A log of the meals consumed by a trainee,
        including details such as calories, macronutrients, and meal
        types.

    -   Form elements: A form where trainers can add and edit meals for
        their trainees, as well as view a summary of total calorie and
        macronutrient intake over time.

    -   Links: Links to the trainee profile of the trainee being
        tracked.

# Fitness App Database Schema

## User Table

  | Column Name | Data Type | Description |
  | ----------- | --------- | ----------- |
  `user_id`     |integer       |Unique ID for each user
  `name`        |varchar(50)   |User's name
  `email`       |varchar(50)   |User's email address
  `password`    |varchar(60)   |User's password
  `age`         |integer       |User's age in years
  `gender`      |varchar(10)   |User's gender (male/female/other)

## Trainee Table 

 | Column Name | Data Type | Description |
  | ----------- | --------- | ----------- |
  |`trainee_id`       |integer       |Unique ID for each trainee same as user_id from Users
  |`activity_level`   |integer       |A value indicating trainee's activity level (1 = sedentary, 2 = lightly active, 3 = moderately active, 4 = very active)
  |`height`           |decimal       |User's height in meters
  |`weight`           |decimal       |User's weight in kilograms
  |`goal`             |varchar(50)   |Trainee's fitness goal (e.g., lose weight, build muscle, maintain weight)

## Trainer Table 

  | Column Name | Data Type | Description |
  | ----------- | --------- | ----------- |
  `trainer_id`  | integer   | Unique ID for each trainer
  `trainee_id`  | integer   | ID of the user who is a trainee

## Dietician Table 

  | Column Name | Data Type | Description |
  | ----------- | --------- | ----------- |
  `dietician_id`  | integer    | Unique ID for each dietician
  `trainee_id`    | integer    | ID of the user who is a trainee

## Calorie Intake Table 

  | Column Name | Data Type | Description |
  | ----------- | --------- | ----------- |
  `intake_id`   | integer      | Unique ID for each calorie intake record
  `trainee_id`  | integer      | ID of the trainee who recorded the intake
  `date`        | date         | Date when the intake was recorded
  `meal_type`   | varchar(50)  | Type of meal (e.g., breakfast, lunch, dinner, snack)
  `calories`    | integer      | Number of calories consumed during the meal

## Exercise Table 

  | Column Name | Data Type | Description |
  | ----------- | --------- | ----------- |
  `exercise_id`    | integer      | Unique ID for each exercise record
  `trainee_id`     | integer      | ID of the trainee who recorded the exercise
  `date`           | date         | Date when the exercise was performed
  `exercise_type`  | varchar(50)  | Type of exercise performed (e.g., running, weightlifting, yoga)
  `duration`       | integer      | Duration of the exercise in minutes

## Diet Plan Table

  | Column Name | Data Type |
  | ----------- | --------- |
  `plan_id`           | integer     
  `trainee_id`        | integer     
  `start_date`        | date        
  `end_date`          | date        
  `plan_description`  | text        

## Exercise Plan Table 

  | Column Name | Data Type |
  | ----------- | --------- |
  `plan_id`            |integer
  `trainee_id`         |integer
  `start_date`         |date
  `end_date`           |date
  `plan_description`   |text  

# Other Aspects

## Test Data

Test data will be generated using a combination of real-world data and
synthetic data.

## Security

The Fitfusion website will implement several security measures,
including session management and XSRF prevention, to ensure the safety
and privacy of user data.

