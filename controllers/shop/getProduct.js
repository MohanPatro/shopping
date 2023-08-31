const Product=require('../../models/product')
const User=require('../../models/user')


exports.getProduct=(req,res)=>{
    const productId=req.params.productId;
    Product.findById(productId)
    .then((result)=>{
        res.render('shop/product-details',
        {
        path:"/products",
        pageTitle:result.title,
        product:result
    })
    })

}