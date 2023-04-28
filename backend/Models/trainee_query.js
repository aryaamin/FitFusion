const pool = require("./Database");

class Trainee {
  constructor(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  async updateCalorie(trainee_id, date, meal, calories) {

      let result = await pool.query(`SELECT max(intake_id) FROM calorie_intake`);
      const intake_id = result.rows[0].max + 1;

      try {
          result = await pool.query(`INSERT INTO calorie_intake VALUES ($1, $2, $3, $4, $5)`, [intake_id, trainee_id, date, meal, calories]);
          // return {"trainee_id" : trainee_id};
      } catch (e) {
          return {"error" : e};
      }

  }

  async updateExercise(trainee_id, date, exercise, duration) {
    
    let result = await pool.query(`SELECT max(exercise_id) FROM exercise`);
    const exercise_id = result.rows[0].max + 1;

    try {
        result = await pool.query(`INSERT INTO exercise VALUES ($1, $2, $3, $4, $5)`, [exercise_id, trainee_id, date, exercise, duration]);
        // return {"trainee_id" : trainee_id};
    } catch (e) {
        return {"error" : e};
    }

  }


  async getInfo() {
    const result = await pool.query(`SELECT user_id, name, email, age, gender, user_role
                                     FROM users 
                                     WHERE user_id = $1`, [this.id]);

    return result.rows[0];
  }


  async getCalorie() {
    const result = await pool.query(`SELECT AVG(calories) AS avg_calories, date
                                     FROM calorie_intake
                                     WHERE trainee_id = $1 
                                     GROUP BY date 
                                     ORDER BY date DESC
                                     LIMIT 5`, [this.id]);

    return result.rows;
  }

  async getTraineeTable() {
    const result = await pool.query(`SELECT *
                                     FROM trainee
                                     WHERE trainee_id = $1 
                                      `, [this.id]);

    if (result.rows) {
        return result.rows[0];
    } else {
        return {};
    }
  }

  async getExercises() {
    const result = await pool.query(`SELECT *
                                     FROM exercise
                                     WHERE trainee_id = $1
                                     ORDER BY date DESC`, [this.id]);

    return result.rows;
  }

  async getDietPlan() {
    const result = await pool.query(`SELECT *
                                     FROM diet_plan
                                     WHERE trainee_id = $1 AND
                                     start_date < CURRENT_DATE AND end_date > CURRENT_DATE;`, [this.id]);

    return result.rows;
  }

  async getExercisePlan() {
    const result = await pool.query(`SELECT *
                                     FROM exercise_plan
                                     WHERE trainee_id = $1 AND
                                     start_date <= CURRENT_DATE AND end_date >= CURRENT_DATE;`, [this.id]);

    return result.rows;
  }

}

module.exports = Trainee;
