const mysql = require("mysql");

const db = mysql.createPool({
    host:'85.10.205.173',
    user:'telaga_darian',
    password: 'kmzway87aa',
    database: 'db_telaga',
    port:'3306',
    multipleStatements: true
})

db.getConnection((err)=> {
    if(err) {
        return console.log(err)
    }
    console.log('Connected to MySQL Server')

})

module.exports = { db };
