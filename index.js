const express = require("express")

const blogApp = express()


blogApp.use(function(request, response){
    
    response.end("homepagee")
})

blogApp.listen(3000, function () {
    console.log("port 3000")
})