const Product=require('../../models/product')
const User=require('../../models/user')




exports.getCart=(req,res,next)=>{
    req.user.getCart()
        .then(products=>{
            console.log(products)
            res.render("shop/cart",
            {
                pageTitle:'cart',
                path:'/cart', 
                products:products
            })
        })
    .catch((err)=>{
        console.log("hellop")
    })
    
}