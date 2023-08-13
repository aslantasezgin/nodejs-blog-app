const express =require("express")
const router = express.Router()
const path = require("path")

const db = require("../data/db")



router.use("/blogs/category/:categoryid", async function(request,response){
 const id = request.params.categoryid
 try{
  const [blogs,] = await db.execute("select * from blog where categoryId=?",[id])
  const [categories,] = await db.execute("select * from category")
    
  response.render("users/blogs",{
    title:"Tüm Kurslar",
    blogs:blogs,
    categories:categories,
    selected: id 
  })
 }
 catch(err){
  console.log(err)
 }
})

router.use("/blogs/:id",async function(request, response){
const id = request.params.id;
try{
    const [blog,] = await db.execute("select * from blog where id=?",[id])
    if(blog[0]){
     return response.render("users/blog-details", {
        title:blog[0].blogTitle,
        blog: blog[0]
       })
    }
    response.redirect("/")
  
}
catch(err){
    console.log(err)
}


})
    

router.use("/blogs",async function(request, response){

    try{
    const [blogs] = await db.execute("select * from blog where isAgree=1")
    const [categories,] = await db.execute("select * from category")
    
    response.render("users/blogs",{
      title:"Tüm Kurslar",
      blogs:blogs,
      categories:categories,
      selected : null  
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
          categories:categories,
          selected : null  
        })
    
        }
        
        catch(err){
        console.log(err)
        }
})

module.exports = router