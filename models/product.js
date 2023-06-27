const {Sequelize,sequelize}=require('../helpers.js/database')
const Product=sequelize.define('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type:Sequelize.DataTypes.STRING
    },
    imageUrl:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    description:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    }
})


// Product.sync({alter:true})
module.exports=Product;