const Product=require('../../models/product')
const User=require('../../models/user')



exports.postDeleteCart=(req,res,next)=>{
    const productId=req.body.productId;
    console.log("hello")
    req.user.deleteCart(productId)
    .then((result)=>{
        res.redirect('/cart')
    })
    .catch((err)=>{
        console.log(err)
    })
   
}