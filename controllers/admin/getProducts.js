const Product=require('../../models/product')


exports.getProducts=(req,res,next)=>{
    

    Product.fetchAll()
    .then((result)=>{
        res.render("admin/products",
    {
        prod:result,
        pageTitle:'Admin Products',
        path:'/admin/products'
    })
    })
    
}