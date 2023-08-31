const Product=require('../../models/product')


exports.getEditProducts=(req,res,next)=>{
    const editMode=req.query.edit;
    if(!editMode)
    {
        return res.redirect('/')
    }

    const productId=req.params.productId
    Product.findById(productId)
    .then((result)=>{
        res.render("admin/edit-product",
    {
        pageTitle:'edit-products',
        path:'/admin/edit-product',
        editing:editMode,
        product:result

    })
    })
    .catch((err)=>{
        res.redirect('/')
    })


}