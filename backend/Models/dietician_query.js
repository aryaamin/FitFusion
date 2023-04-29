const pool = require("./Database");

class Dietician {
  constructor(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  async getTrainees() {
    
    const result = await pool.query(`SELECT user_id, name
                                     FROM Users
                                     INNER JOIN Dietician
                                     ON user_id = trainee_id
                                     WHERE dietician_id = $1
                                     `, [this.id]);

    if (result.rows) {
        return result.rows;
    } else {
        return {};
    }
  }


}

module.exports = Dietician;
