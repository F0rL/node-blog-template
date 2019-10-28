const env = process.env.NODE_ENV

let MYSQL_CONF

if (env === 'development') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'a3251520',
    port: '3306',
    database: 'blog_test'
  }
}

if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'a3251520',
    port: '3306',
    database: 'blog_test'
  }
}

module.exports = {
  MYSQL_CONF
}