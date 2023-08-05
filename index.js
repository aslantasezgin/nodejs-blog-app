const express = require("express")

const blogApp = express()


blogApp.use(function(request, response, next){
    console.log("middleware1")
    next()
})

blogApp.use(function(request, response, next){
    next()

})

blogApp.use(function(request, response){
    
    response.send("<h1>homepagex </h1>")
 })
 

blogApp.listen(3000, function () {
    console.log("port 3000")
})