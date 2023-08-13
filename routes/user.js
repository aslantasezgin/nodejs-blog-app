const express =require("express")
const router = express.Router()
const path = require("path")


const data ={
title:"Popüler Kurslar",
categories:["Web Geliştirme", "Programlama", "Mobil Uygulamalar", "Veri Analizi", "Ofis Uygulamaları"],
blogs:[
{
id:1,
blogTitle:"Web Geliştirme 101",
blogDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, debitis.",
blogImg:"1.jpeg",
isFeatured:true,
isAgree:true,
},
{
id:2,
blogTitle:"Web Geliştirme 201",
blogDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, debitis.",
blogImg:"2.jpeg",
isFeatured:true,
isAgree:false,

},
{
id:3,
blogTitle:"Web Geliştirme 301",
blogDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, debitis.",
blogImg:"3.jpeg",
isFeatured:false,
isAgree:true,
},
]
}

router.use("/blogs/:id",function(request, response){
response.render("users/blog-details")
})
    
router.use("/blogs",function(request, response){
response.render("users/blogs", data)
})
    
router.use("/",function(request, response){
response.render("users/index", data)
})

module.exports = router