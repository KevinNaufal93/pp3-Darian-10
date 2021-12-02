const { db } = require('../database');


module.exports = {

    registerUser: (req, res) => {
        let { username, email, password, fullname } = req.body
        console.log(`Connecting to register API success, user email is ${req.body.email}`)
        //password = Crypto.createHmac("sha1", "hash123").update(password).digest("hex");
        let insertQuery = `Insert into user (username, email, password, fullname) values (
        ${db.escape(username)},
        ${db.escape(email)},
        ${db.escape(password)},
        ${db.escape(fullname)});`

        db.query(insertQuery, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).send(err)
            }
            console.log("Success Processing register API")
        }) 
    },

}