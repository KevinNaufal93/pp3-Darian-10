const mysql = require("mysql");

const db = mysql.createConnection({
    host:'localhost',
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
    console.log('connected to MySQL Server')

})

module.exports = { db };
