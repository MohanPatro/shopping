exports.showError=(req,res,next)=>{
    // res.status(404).sendFile(rootdir+'/views/404.html')
    res.status(404).render("404",
    {
        pageTitle:'error',
        path:'/404'
    })
}