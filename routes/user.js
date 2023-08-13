const express =require("express")
const router = express.Router()
const path = require("path")

const db = require("../data/db")





router.use("/blogs/:id",function(request, response){
response.render("users/blog-details")
})
    

router.use("/blogs",async function(request, response){

    try{
    const [blogs] = await db.execute("select * from blog where isAgree=1")
    const [categories,] = await db.execute("select * from category")
    
    response.render("users/blogs",{
      title:"Tüm Kurslar",
      blogs:blogs,
      categories:categories  
    })

    }
    
    catch(err){
    console.log(err)
    }


    })
    
router.use("/",async function(request, response){
    try{
        const [blogs] = await db.execute("select * from blog where isAgree=1 && isFeatured=1")
        const [categories,] = await db.execute("select * from category")
        
        response.render("users/index",{
          title:"Popüler Kurslar",
          blogs:blogs,
          categories:categories  
        })
    
        }
        
        catch(err){
        console.log(err)
        }
})

module.exports = router