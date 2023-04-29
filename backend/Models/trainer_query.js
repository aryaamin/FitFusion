const pool = require("./Database");

class Trainer {
  constructor(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  async getTrainees() {
    const result = await pool.query(`SELECT user_id, name
                                     FROM Users
                                     INNER JOIN Trainer
                                     ON user_id = trainee_id
                                     WHERE trainer_id = $1
                                     `, [this.id]);

    if (result.rows) {
        return result.rows;
    } else {
        return {};
    }
  }


}

module.exports = Trainer;
