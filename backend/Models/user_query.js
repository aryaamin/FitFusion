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

}

module.exports = User;
