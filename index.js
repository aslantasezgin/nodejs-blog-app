const express = require("express")

const blogApp = express()


blogApp.use("/blogs/:id",function(request, response, next){
    console.log(request.params)
    response.send("Blog Detay Sayfası" + " " + request.params.id)
})

blogApp.use("/blogs",function(request, response, next){
    response.send("Blogs")
})

blogApp.use("/",function(request, response, next){
    response.send("Anasayfa")
})





 

blogApp.listen(3000, function () {
    console.log("port 3000")
})