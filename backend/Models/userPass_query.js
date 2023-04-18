const pool = require("./Database");
const bcrypt = require("bcrypt");

class UserPass {
    constructor (id) {
        this.id = id;
    }

    getId() {
        return id;
    }

    async getPassHash() {
        const result = await pool.query(`SELECT password 
                                         FROM users 
                                         WHERE user_id = $1`, [this.id]);

        return result;
    }

    async verifyPassword(password) {
        const hash = await this.getPassHash();

        if (!hash.rows.length) {
            return false;
        } 

        // const res = await bcrypt.compare(password, hash.rows[0]["hashed_password"]);

        if(password == hash.rows[0]["password"]){
            return 1;
        }
        else{
            return 0;
        }

        //return res;
    }

}

module.exports = UserPass;