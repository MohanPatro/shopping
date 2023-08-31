const Product=require('../../models/product')


exports.getAddProducts=(req,res,next)=>{
    res.render("admin/edit-product",
    {
        pageTitle:'add-products',
        path:'/admin/add-product',
        editing:false
    })
}
