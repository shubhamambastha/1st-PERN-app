const Sequelize = require("sequelize");

const db = new Sequelize("assignment", "postgres", "shubham24", {
 host: "localhost",
 dialect: "postgres"
});

db.authenticate()
.then(() => {
 console.log("DB connection is established");
})

module.exports = db; 