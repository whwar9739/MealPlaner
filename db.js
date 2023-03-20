const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: "192.168.1.222",
  user: "root",
  password: "fnb$C1296",
  database: "MealPlanner"
});

pool.getConnection((err, connection) => {
  if(err){
    if (err.code === 'PROTOCOL_CONNECTION_LOST'){
      console.error('Database connection lost');
    }
    if (err.code === 'ER_CON_COUNT_ERROR'){
      console.error('Database has too many connections');
    };
    if (err.code === 'ECONNREFUSED'){
      console.error('Database connection was refused');
    }
  }
  if(connection) connection.release();

  return;
});

module.exports = pool;