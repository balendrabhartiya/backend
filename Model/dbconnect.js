const mysql = require("mysql");     

const connection = mysql.createConnection ({
    host: 'localhost',
    user: "root",
    password: "",
    database: "ecommerce",
    port:3306 
});

connection.connect((err) => {
    if (err) {
        console.log("Error", err.sqlMessage)
    }
    else {
        console.log("Server is started")
    }
});

module.exports = connection;