const express = require("express")

const blogApp = express()


const path = require("path")


blogApp.use("/blogs/:id",function(request, response, next){

response.sendFile(path.join(__dirname, "views/users", "blog-details.html"))
})

blogApp.use("/blogs",function(request, response, next){
    response.sendFile(path.join(__dirname, "views/users", "blogs.html"))

})

blogApp.use("/",function(request, response, next){
    response.sendFile(path.join(__dirname, "views/users", "index.html"))

})



blogApp.listen(3000, function () {
    console.log("port 3000")
})