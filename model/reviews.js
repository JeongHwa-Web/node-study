module.exports = function(sequelize, DataTypes){
    return sequelize.define('reviews',{
        idx: {
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allwNull:false
        },
        user_id:{
            type:DataTypes.TEXT
        }
    })
}