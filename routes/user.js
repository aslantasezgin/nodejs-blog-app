const express =require("express")
const router = express.Router()
const path = require("path")


const data ={
title:"Popüler Kurslar",
categories:["Web Geliştirme", "Programlama", "Mobil Uygulamalar", "Veri Analizi", "Ofis Uygulamaları"] 
}

router.use("/blogs/:id",function(request, response){
response.render("users/blog-details")
})
    
router.use("/blogs",function(request, response){
response.render("users/blogs")
})
    
router.use("/",function(request, response){
response.render("users/index", data)
})

module.exports = router