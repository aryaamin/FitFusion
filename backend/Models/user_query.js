const pool = require("./Database");

class User {
  constructor(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  async getInfo() {
    const result = await pool.query(`SELECT user_id, name, email, age, gender, user_role
                                     FROM users 
                                     WHERE user_id = $1`, [this.id]);

    return result.rows[0];
  }


  async getCalorie() {
    const result = await pool.query(`SELECT AVG(calories) AS avg_calories
                                     FROM calorie_intake
                                     WHERE trainee_id = $1 
                                     GROUP BY date 
                                     LIMIT 10`, [this.id]);

    return result.rows;
  }

  async getTraineeTable() {
    const result = await pool.query(`SELECT *
                                     FROM trainee
                                     WHERE trainee_id = $1 
                                      `, [this.id]);

    return result.rows[0];
  }

  async editinfo(name, password, email, age, gender) {
    const result = await pool.query(`UPDATE users
                                     SET name = $2
                                     WHERE user_id = $1`, [this.id, name]);

    return 0;
  }

  async exercises() {
    const result = await pool.query(`SELECT *
                                     FROM EXERCISE
                                     WHERE trainee_id = $1`, [this.id]);

    return result.rows;
  }

  async gettrainerinfo() {
    const result = await pool.query(`SELECT t.trainer_id, u.name, u.email, u.age, u.gender
                                    FROM Trainer t
                                    JOIN Users u ON t.trainer_id = u.user_id
                                    WHERE t.trainee_id = $1`, [this.id]);

    return result.rows[0];
  }

  async availabletrainers() {
    const result = await pool.query(`SELECT user_id, name, age, gender
    FROM Users
    WHERE user_role = 'trainer';
    `);

    return result.rows;
  }
  
  async update_trainer(trainer_id) {
    const result = await pool.query(`update trainer set trainer_id = $2 where trainee_id = $1`, [this.id, trainer_id]);

    return result.rows;
  }
}

module.exports = User;
