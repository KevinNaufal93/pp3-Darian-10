const { db } = require('../database');

module.exports = {

getTask: (req,res) => {
    db.query(`SELECT * FROM order_db WHERE order_status = 'started'`,
    (err, result) => {
        if (err) {
            res.send(err)
        }
        if (result.length > 0) {
            console.log(result)
            res.send(result)
        } else {
            res.send({ message: "Wrong username or password" })
        }
        })
    },

}