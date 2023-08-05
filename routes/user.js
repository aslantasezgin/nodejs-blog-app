const express =require("express")
const router = express.Router()
const path = require("path")


router.use("/blogs/:id",function(request, response, next){
response.sendFile(path.join(__dirname, "../views/users", "blog-details.html"))
})
    
router.use("/blogs",function(request, response, next){
response.sendFile(path.join(__dirname, "../views/users", "blogs.html"))
})
    
router.use("/",function(request, response, next){
response.sendFile(path.join(__dirname, "../views/users", "index.html"))
})

module.exports = router