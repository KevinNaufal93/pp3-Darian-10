const { db } = require('../database');
const { createToken } = require('../helper/createToken')
const Crypto = require('crypto');

module.exports = {

    registerUser: (req, res) => {
        let { username, email, password, fullname } = req.body
        console.log(`Connecting to register API success, user email is ${req.body.email}`)
        password = Crypto.createHmac("sha1", "hash123").update(password).digest("hex");
        let insertQuery = `Insert into user (username, email, password, fullname, auth_status) values (
        ${db.escape(username)},
        ${db.escape(email)},
        ${db.escape(password)},
        ${db.escape(fullname)},
        "admin");`

        db.query(insertQuery, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).send(err)
            }
            console.log("Success Processing register API")
        }) 
    },

    loginUser: (req,res) => {
        let { username, password } = req.body;
        req.body.password = Crypto.createHmac("sha1", "hash123").update(password).digest("hex");
        console.log(`logging in into ${req.body.username} account'`)
        let scriptQuery = `SELECT * FROM user WHERE username = ${db.escape(req.body.username)} AND password = ${db.escape(req.body.password)}`;
        db.query(scriptQuery, (err, result) => {
            console.log(result[0])
            if (err) {
                return res.send({err, message: "Wrong username or password"})
            } if (result[0]) { //create token
                let { iduser, username } = result[0]   
                let token = createToken({ iduser, username })
                console.log(`Create Token successful : ${token}`)
                return res.status(200).send({ dataLogin: result[0], token, message:"Login Success" })
            } else {
                return res.send({message: "Account not found"})
            }
        })
    },

    keepLogin: (req,res) => {
        console.log(req.user)
        db.query(`SELECT * FROM user WHERE iduser = ${req.user.iduser}`,
        (err, result) => {
            if (err) {
                return res.send(err)
            }
            console.log(req.user)
            return res.send(result)
            
        })
    },

}