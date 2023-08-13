const express = require("express")
const blogApp = express()

const mysql = require("mysql2")
const config = require("./config")
let connection = mysql.createConnection(config.db)

connection.connect((err) => {
    if(err){
        console.log(error)
    }else{
        console.log("success connection")
    }
})


blogApp.set("view engine", "ejs")
const path = require("path")
const userRoutes = require("./routes/user")
const adminRoutes = require("./routes/admin")



blogApp.use("/libs", express.static(path.join(__dirname,"node_modules")))
blogApp.use("/pub",express.static(path.join(__dirname,"public")))

blogApp.use("/admin", adminRoutes)
blogApp.use(userRoutes)



blogApp.listen(3000, function () {
    console.log("port 3000")
})