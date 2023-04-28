const pool = require("./Database");

class User {
  constructor(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  async createUser(name, password, email, age, gender, role) {
      let result = await pool.query(`SELECT max(user_id) FROM users`);
      const id = result.rows[0].max + 1;

      try {
          result = await pool.query(`INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7)`, [id, name, email, password, age, gender, role]);
          
          return {"id" : id};
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

  async editinfo(name, password, email, age, gender) {
    const result = await pool.query(`UPDATE users
                                     SET name = $2
                                     WHERE user_id = $1`, [this.id, name]);

    return 0;
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
