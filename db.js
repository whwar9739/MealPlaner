const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: "192.168.1.222",
  user: "root",
  password: "fnb$C1296",
  database: "MealPlanner"
});

module.exports={
  getConnection: function(){
    return new Promise(function(resolve,reject){
      pool.getConnection().then(function(connection){
        resolve(connection);
      }).catch(function(error){
        reject(error);
      });
    });
  }
}
