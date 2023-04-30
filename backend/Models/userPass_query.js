const pool = require("./Database");
const bcrypt = require("bcrypt");

class UserPass {
    constructor (email) {
        this.email = email;
    }

    async getId() {
        const result = await pool.query(`SELECT user_id FROM users where email = $1`, [this.email]);

        return result.rows[0].user_id;
    }

    async getPassHash() {
        const result = await pool.query(`SELECT password 
                                         FROM users 
                                         WHERE email = $1`, [this.email]);
        return result;
    }

    async verifyPassword(password) {
        const hash = await this.getPassHash();

        if (!hash.rows.length) {
            return 0;
        } 

        const res = await bcrypt.compare(password, hash.rows[0].password);

        if(res){
            const id = await this.getId();
            return id;
        }
        else{
            return 0;
        }

        //return res;
    }

}

module.exports = UserPass;
