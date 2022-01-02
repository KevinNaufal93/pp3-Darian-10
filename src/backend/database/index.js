const mysql = require("mysql");

const db = mysql.createConnection({
    host:'192.168.0.10',
    user:'root',
    password: 'password',
    database: 'db_telaga',
    port:'3306',
    multipleStatements: true
})

db.connect((err)=> {
    if(err) {
        return console.log(err)
    }
    console.log('Connected to MySQL Server')

})

module.exports = { db };
