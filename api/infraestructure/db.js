const mysql = require("mysql");
const dotenv = require("dotenv")
dotenv.config()

var connection = mysql.createConnection({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
});

module.exports = connection;