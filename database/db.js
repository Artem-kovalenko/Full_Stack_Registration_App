const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize("reg_app", "root", "cubex", {
    host: "localhost",
    dialect: "mariadb",

    pool: {
        max: 4,
        min: 0,
        acquire: 30000,
        idle: 10000

    }
})

// then we can import db and ger acces to the sequelize by db.sequelize
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db