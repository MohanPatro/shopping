const Product=require('../../models/product')

exports.postProducts=(req,res,next)=>{
    console.log(req.body)
    const title=req.body.title;
    const imageUrl=req.body.imageUrl;
    const description=req.body.description;
    const price=req.body.price;
    const product=new Product(title,imageUrl,description,price,req.user._id);
    product.save()
    .then((result)=>{
        console.log(result)
        console.log("created success Fully")
        res.redirect('/admin/products')
    })
    .catch(err=>{
        console.log(err)
    })
    
}