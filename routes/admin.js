const express = require("express")
const router = express.Router()
const path = require("path")

router.use("/blog/create",function(request, response, next){
response.render("admin/blog-create")
})

router.use("/blogs/:id",function(request, response, next){
    response.render("admin/blog-edit")
    })

router.use("/blogs/",function(request, response, next){
response.render("admin/blog-list" )
})



module.exports = router;