const { exec, escape } = require('../db/mysql')
const {genPassword} = require('../utils/cryp')

const login = (username, password) => {
  // 避免像括号内内容{kuma' -- }sql注入
  username = escape(username)

  // 加密密码
  password = genPassword(password)

  password = escape(password)
  const sql = `
    select username, realname from users where username=${username} and password=${password}
  `
  // console.log('sql', sql);
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}

module.exports = {
  login
}