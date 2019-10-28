const mysql = require('mysql')

const con = mysql.createConnection({
  host:  'localhost',
  user: 'root',
  password: 'a3251520',
  port: '3306',
  database: 'blog_test'
})

con.connect()

// const sql = `select * from users;`
// const sql = `select id, username from users;`
// const sql = `update users set realname='never' where username='love';`
const sql = `insert into blogs (title, content, author) values ('标题3', '内容3', 'kuma');`
con.query(sql, (err, result) => {
  if(err) {
    console.error(err)
    return
  }
  console.log(result);
})

con.end()

