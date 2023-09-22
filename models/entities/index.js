// models/db.js
const sql = require("mysql2/promise")
const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require("dotenv")
dotenv.config()


sql.
    createConnection({ user:"root", password: "admin" })
    .then(()=>
    {
        console.log("db CONNECTED successfully")
    })

const sequelize = new Sequelize(
    DATABASE=process.env.DATABASE,
    USER=process.env.USER,
    PASSWORD=process.env.PASSWORD,
    {
    host:process.env.HOST,
    dialect: "mysql",
});
const db={};

db.sequelize=sequelize

db.Report = require("./Reports")(sequelize, DataTypes);
db.Employee = require("./Employees")(sequelize, DataTypes);
db.sequelize.sync({ force: false }).then(() => {
    console.log("re-sync done"); 
  });

module.exports = db;
