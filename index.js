const express = require("express")
const blogApp = express()
const path = require("path")

const userRoutes = require("./routes/user")
const adminRoutes = require("./routes/admin")



blogApp.use("/libs", express.static("node_modules"))
blogApp.use("/pub",express.static("public"))

blogApp.use("/admin", adminRoutes)
blogApp.use(userRoutes)



blogApp.listen(3000, function () {
    console.log("port 3000")
})