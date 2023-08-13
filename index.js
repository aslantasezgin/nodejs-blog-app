const express = require("express")
const blogApp = express()




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