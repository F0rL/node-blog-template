const xss = require('xss')
const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
  // 拼接sql语句，注意空格
  let sql = `select * from blogs where 1=1 `
  if(author) {
    sql += `and author='${author}' `
  }
  if(keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`
  return exec(sql)
}

const getDetail = (id) => {
  const sql = `select * from blogs where id='${id}'`
  return exec(sql).then((rows) => {
    return rows[0]
  })
}

const newBlog = (blogData = {}) => {
  let {title, content, author} = blogData
  title = xss(title)
  content= xss(content)
  console.log(title);
  const createtime = Date.now()
  const sql = `
    insert into blogs (title, content, createtime, author)
    values ('${title}', '${content}', '${createtime}', '${author}')
  `
  return exec(sql).then(insertData => {
    // console.log(insertData)
    return {
      id: insertData.insertId
    }
  })
}

const updateBlog = (id, blogData = {}) => {
  const {title, content} = blogData
  const sql = `
    update blogs set title='${title}', content='${content}' where id=${id}
  `
  return exec(sql).then(updateData => {
    // console.log(updateData)
    if(updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}

const deleBlog = (id, author) => {
  const sql = `
    delete from blogs where id='${id}' and author='${author}'
  `
  return exec(sql).then(delData => {
    if(delData.affectedRows > 0) {
      return true
    } 
    return false
  })
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleBlog
}
