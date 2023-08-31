const Product=require('../../models/product')
const User=require('../../models/user')



exports.postcart=(req,res,next)=>{
    const productId=req.body.productId

    Product.findById(productId)
    .then(product=>{

        return req.user.addToCart(product)
    }) 
    .then(result=>{
        console.log(result)
        res.redirect('/cart')
    })
    
}