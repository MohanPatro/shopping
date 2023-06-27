const Product=require('../models/product')

exports.postProducts=(req,res,next)=>{
    const title=req.body.title;
    const imageUrl=req.body.imageUrl;
    const description=req.body.description;
    const price=req.body.price;
    const product=new Product(null,title,imageUrl,description,price);
    Product.create({
        title:title,
        price:price,
        imageUrl:imageUrl,
        description:description
    
    }).then((result)=>{
        console.log("created success Fully")
        res.redirect('/')
    })
    
}

exports.getAddProducts=(req,res,next)=>{
    // res.sendFile(path.join(rootdir,'views','add-product.html'))
    res.render("admin/edit-product",
    {
        pageTitle:'add-products',
        path:'/admin/add-product',
        editing:false
    })
}


exports.getEditProducts=(req,res,next)=>{
    const editMode=req.query.edit;
    if(!editMode)
    {
        return res.redirect('/')
    }

    const productId=req.params.productId
    const product=Product.findOne({where:{id:productId}})
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

exports.getProducts=(req,res,next)=>{
    
    // console.log(Product.fetchAll())
    Product.findAll()
    .then((result)=>{
        res.render("admin/products",
    {
        prod:result,
        pageTitle:'Admin Products',
        path:'/admin/products'
    })//alredy defined the views folder
    })
    
}

exports.postEditProducts=(req,res)=>{
    const productId=req.body.productId;
    const updatedTitle=req.body.title;
    const updatedImageUrl=req.body.imageUrl;
    const updatedDescription=req.body.description;
    const updatedPrice=req.body.price;
    Product.update(req.body,{where:{id:productId}}).then(result=>{res.redirect('/admin/products')})
    .catch((err)=>{
        console.log(err);
        res.redirect('/')
    })
    
}

exports.deleteProduct=(req,res)=>{
    const productId=req.params.productId;
    Product.destroy({where:{id:productId}})
    .then(result=>{
        res.redirect('/')
    })
    .catch(err=>{
        res.send(err)
    })
   
}
