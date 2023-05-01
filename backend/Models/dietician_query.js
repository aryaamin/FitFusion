const pool = require("./Database");

class Dietician {
  constructor(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  async getTrainees() {
    const result = await pool.query(
      `SELECT user_id, name
                                     FROM Users
                                     INNER JOIN Dietician
                                     ON user_id = trainee_id
                                     WHERE dietician_id = $1
                                     `,
      [this.id]
    );

    return result.rows;
  }

  async getPlans() {
    const result = await pool.query(
      `SELECT *
                                     FROM Diet_Plan
                                     INNER JOIN Dietician
                                     ON Dietician.trainee_id = Diet_Plan.trainee_id
                                     WHERE Dietician.dietician_id = $1
                                     `,
      [this.id]
    );

    return result.rows;
  }

  async deletePlan(planid) {
    const result = await pool.query(
      `DELETE 
                                     FROM Diet_Plan
                                     WHERE plan_id = $1 
                                     `,
      [planid]
    );

    return result.rows;
  }
}

module.exports = Dietician;
