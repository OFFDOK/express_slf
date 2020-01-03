var mysql = require('mysql');

// //local mysql db connection // // //

var connection = mysql.createConnection({
    connectionimit: 100,
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root123456',
    database: 'database_slf',
    multipleStatements: true
});

// var connection = mysql.createConnection({
//     connectionimit: 100,
//     host: 'localhost',
//     user: 'root',
//     port: 3306,
//     password: 'password',
//     // database: 'revelsoft_erp_mtp_tmp',
//     database: 'df_slf',
//     multipleStatements: true
// });


/*  Note 
multipleStatements: Allow multiple mysql statements per query. 
Be careful with this, 
it could increase the scope of SQL injection attacks. (Default: false)
 */

connection.connect();

module.exports = connection;