const mysql = require("mysql2");
require("dotenv").config({ path: "./server/.env" });

exports.plugin = {
    name: "mysql-plugin",

    register: async function (server) {

        const pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });

        pool.getConnection((err, conn) => {
            if (err) console.log(err);
            else {
                console.log("MySQL Connected Successfully");
                conn.release();
            }
        });

        server.app.db = pool.promise();
    }
};