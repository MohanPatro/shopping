const Product=require('../../models/product')


exports.deleteProduct=(req,res)=>{
    const productId=req.params.productId;
    Product.delete(productId)
    .then(()=>{
        req.user.deleteCart(productId)
        .then(result=>{
            res.redirect('/')
        })
    })
    .catch(err=>{
        res.send(err)
    })
}