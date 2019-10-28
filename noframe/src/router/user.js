const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {
  const { method, path } = req
  // 登录
  // 暂时修改为GET方法
  if (method === 'GET' && path === '/api/user/login') {
    const { username, password } = req.query
    const result = login(username, password)
    return result.then(data => {
      if (data.username) {
        // 操作cookie
        res.setHeader('Set-Cookie', `username=${req.query.username};path=/`)
        return new SuccessModel('登录成功')
      } else {
        return new ErrorModel('登录失败')
      }
    })
  }
    // 登录验证测试
  if(method === 'GET' && path === '/api/user/login-test') {
    if(req.cookie.username) {
      return Promise.resolve(new SuccessModel({
        username: req.cookie.username
      }))
    }else {
      return Promise.resolve(new ErrorModel('尚未登录'))
    }
  }
}

module.exports = handleUserRouter