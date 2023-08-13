const mysql = require("mysql2")
const config = require("../config")
let connection = mysql.createConnection(config.db)

connection.connect((err) => {
    if(err){
        console.log(error)
    }else{
    }
})

module.exports = connection.promise()