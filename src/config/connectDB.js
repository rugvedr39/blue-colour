const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '8600988002',
//     database: 'goagame',
// });

const connection = mysql.createPool({
    host: "database-2.c1yu4u8uoxrf.ap-southeast-2.rds.amazonaws.com",
    user: "admin",
    password: "8600988002",
    database: "lottery777",
  });

export default connection;