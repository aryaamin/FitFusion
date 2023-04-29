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

    return result.rows;
  }

  async getPlans() {
    
    const result = await pool.query(`SELECT *
                                     FROM Exercise_Plan
                                     INNER JOIN Trainer
                                     ON Exercise_Plan.trainee_id = Trainer.trainee_id
                                     WHERE Trainer.trainer_id = $1
                                     `, [this.id]);

    return result.rows;
  }

  async deletePlan(planid) {
    
    const result = await pool.query(`DELETE 
                                     FROM Exercise_Plan
                                     WHERE plan_id = $1 
                                     `, [planid]);

    return result.rows;
  }

}

module.exports = Trainer;
