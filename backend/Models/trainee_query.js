const pool = require("./Database");

class Trainee {
  constructor(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  async addMeal(startDate, endDate, description) {
    let result = await pool.query(`SELECT max(plan_id) FROM diet_plan`);
    const plan_id = result.rows[0].max + 1;

    try {
      result = await pool.query(
        `INSERT INTO diet_plan VALUES ($1, $2, $3, $4, $5)`,
        [plan_id, this.id, startDate, endDate, description]
      );
      // return {"trainee_id" : trainee_id};
    } catch (e) {
      return { error: e };
    }
  }

  async addExercisePlan(startDate, endDate, description) {
    let result = await pool.query(`SELECT max(plan_id) FROM exercise_plan`);
    const plan_id = result.rows[0].max + 1;

    try {
      result = await pool.query(
        `INSERT INTO exercise_plan VALUES ($1, $2, $3, $4, $5)`,
        [plan_id, this.id, startDate, endDate, description]
      );
      // return {"trainee_id" : trainee_id};
    } catch (e) {
      return { error: e };
    }
  }

  async updateCalorie(trainee_id, date, meal, calories) {
    let result = await pool.query(`SELECT max(intake_id) FROM calorie_intake`);
    const intake_id = result.rows[0].max + 1;

    try {
      result = await pool.query(
        `INSERT INTO calorie_intake VALUES ($1, $2, $3, $4, $5)`,
        [intake_id, trainee_id, date, meal, calories]
      );
      // return {"trainee_id" : trainee_id};
    } catch (e) {
      return { error: e };
    }
  }

  async updateHeight(height_new) {
    try {
      result = await pool.query(
        `update trainee set height = $2 where trainee_id = $1`,
        [this.id, height_new]
      );
    } catch (e) {
      return { error: e };
    }
  }

  async updateWeight(weight_new) {
    try {
      result = await pool.query(
        `update trainee set weight = $2 where trainee_id = $1`,
        [this.id, weight_new]
      );
    } catch (e) {
      return { error: e };
    }
  }

  async updateExercise(trainee_id, date, exercise, duration) {
    let result = await pool.query(`SELECT max(exercise_id) FROM exercise`);
    const exercise_id = result.rows[0].max + 1;

    try {
      result = await pool.query(
        `INSERT INTO exercise VALUES ($1, $2, $3, $4, $5)`,
        [exercise_id, trainee_id, date, exercise, duration]
      );
      // return {"trainee_id" : trainee_id};
    } catch (e) {
      return { error: e };
    }
  }

  async getInfo() {
    const result = await pool.query(
      `SELECT user_id, name, email, age, gender, user_role
                                     FROM users 
                                     WHERE user_id = $1`,
      [this.id]
    );

    return result.rows[0];
  }

  async getCalorie() {
    const result = await pool.query(
      `SELECT AVG(calories) AS avg_calories, date
                                     FROM calorie_intake
                                     WHERE trainee_id = $1 
                                     GROUP BY date 
                                     ORDER BY date DESC
                                     LIMIT 5`,
      [this.id]
    );

    return result.rows;
  }

  async getTraineeTable() {
    const result = await pool.query(
      `SELECT *
                                     FROM trainee
                                     WHERE trainee_id = $1 
                                      `,
      [this.id]
    );

    if (result.rows) {
      return result.rows[0];
    } else {
      return {};
    }
  }

  async getExercises() {
    const result = await pool.query(
      `SELECT *
                                     FROM exercise
                                     WHERE trainee_id = $1
                                     ORDER BY date DESC`,
      [this.id]
    );

    return result.rows;
  }

  async getDietPlan() {
    const result = await pool.query(
      `SELECT *
                                     FROM diet_plan
                                     WHERE trainee_id = $1 AND
                                     start_date < CURRENT_DATE AND end_date > CURRENT_DATE;`,
      [this.id]
    );

    return result.rows;
  }

  async getExercisePlan() {
    const result = await pool.query(
      `SELECT *
                                     FROM exercise_plan
                                     WHERE trainee_id = $1 AND
                                     start_date <= CURRENT_DATE AND end_date >= CURRENT_DATE;`,
      [this.id]
    );

    return result.rows;
  }

  async getTrainerInfo() {
    const result = await pool.query(
      `SELECT t.trainer_id, u.name, u.email, u.age, u.gender
                                    FROM Trainer t
                                    JOIN Users u ON t.trainer_id = u.user_id
                                    WHERE t.trainee_id = $1`,
      [this.id]
    );

    return result.rows[0];
  }

  async getDieticianInfo() {
    const result = await pool.query(
      `SELECT t.dietician_id, u.name, u.email, u.age, u.gender
                                    FROM Dietician t
                                    JOIN Users u ON t.dietician_id = u.user_id
                                    WHERE t.trainee_id = $1`,
      [this.id]
    );

    return result.rows[0];
  }
}

module.exports = Trainee;
