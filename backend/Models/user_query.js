const pool = require("./Database");

class User {
  constructor(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  async createUser(name, password, email, age, gender, role, height, weight, goal, activity) {
      let result = await pool.query(`SELECT max(user_id) FROM users`);
      const id = result.rows[0].max + 1;

      try {
          result = await pool.query(`INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7)`, [id, name, email, password, age, gender, role]);

          if (role == "trainee") {
              result = await pool.query(`INSERT INTO trainee VALUES ($1, $2, $3, $4, $5)`, [id, activity, height, weight, goal]);
          }

          return {"id" : id};
      } catch (e) {
          return {"error" : e};
      }

  }


  async getInfo() {
    const result = await pool.query(`SELECT user_id, name, password, email, age, gender, user_role
                                     FROM users 
                                     WHERE user_id = $1`, [this.id]);

    return result.rows[0];
  }

  async editinfo(name, password, email, age, gender) {
    const result = await pool.query(`UPDATE users
                                     SET name = $2, password = $3, email = $4, age = $5, gender = $6
                                     WHERE user_id = $1`, [this.id, name, password, email, age, gender]);

    return 0;
  }

  async availableTrainers() {
    const result = await pool.query(`SELECT user_id, name, age, gender
    FROM Users
    WHERE user_role = 'trainer';
    `);

    return result.rows;
  }

  async availableDieticians() {
    const result = await pool.query(`SELECT user_id, name, age, gender
    FROM Users
    WHERE user_role = 'dietician';
    `);

    return result.rows;
  }
  
  async update_trainer(trainer_id) {
    var result = await pool.query(`update trainer set trainer_id = $2 where trainee_id = $1`, [this.id, trainer_id]);
    if(result.rowCount === 0){
      result = await pool.query(`INSERT into trainer values ($2, $1)`, [this.id, trainer_id]);
    }
    return result.rows;
  }

  async update_dietician(dietician_id) {
    var result = await pool.query(`update dietician set dietician_id = $2 where trainee_id = $1`, [this.id, dietician_id]);
    if(result.rowCount === 0){
      result = await pool.query(`INSERT into dietician values ($2, $1)`, [this.id, dietician_id]);
    }
    return result.rows;
  }
}

module.exports = User;
