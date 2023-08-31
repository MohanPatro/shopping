const Product=require('../../models/product')


exports.postEditProducts=(req,res)=>{

    Product.update(req.body)
    .then(()=>{
        console.log("updated ");
        res.redirect('/admin/products')
    })

    .catch((err)=>{
        console.log(err);
        res.redirect('/')
    })
    
}