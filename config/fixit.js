const fixit = {
  database: 'my_brownw15_products2',
  username: 'my.brownw15',
  password: 'ku7trk8e3',
  host: '127.0.0.1',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
 
module.exports = fixit;
