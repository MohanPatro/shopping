const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const path=require('path')

app.use(express.static(path.join(__dirname,"public")))


const mongoConnect=require('./helpers.js/database').mongoConnect
app.use(bodyParser.urlencoded({extended:false}))

const errorController=require('./controllers/error')



const Product=require('./models/product')


const User=require('./models/user')

const adminData=require('./routes/admin')
const shopRoutes=require('./routes/shop');


app.use((req,res,next)=>{
    User.findById("64ec229bb2e26d565f292385")
    .then(user=>{
        req.user=new User(user.name,user.email,user.cart,user._id);
        next();
    })
    .catch(err=>{
        console.log(err)
    })
})

app.use('/admin',adminData)
app.use(shopRoutes)
app.use(errorController.showError)



app.set('view engine','ejs')
app.set('views','views')






mongoConnect(()=>{
    app.listen(3000)
})

