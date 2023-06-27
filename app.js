const express=require('express');
const app=express();
// const db=require('./helpers.js/database')
const bodyParser=require('body-parser')
const path=require('path')


const Product=require('./models/product')
const User=require('./models/user')
const {sequelize,Sequelize}=require('./helpers.js/database')

const rootdir=require('./helpers.js/path')
const adminData=require('./routes/admin')
const shopRoutes=require('./routes/shop');
const errorController=require('./controllers/error');



app.set('view engine','ejs')
app.set('views','views')



app.use(bodyParser.urlencoded({extended:false}))


app.use(express.static(path.join(rootdir,"public")))

app.use('/admin',adminData)
app.use(shopRoutes)
app.use(errorController.showError)



Product.belongsTo(User,{constraints:true,onDelete:'CASCADE'})

User.hasMany(Product)
sequelize.sync({force:true})

app.listen(3000);