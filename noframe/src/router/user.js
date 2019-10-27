const handleUserRouter = (req, res) => {
  const method = req.method // GET POST
  const url = req.url
  const path = url.split('?')[0]

  // 登录
  if(method === 'post' && path === '/api/user/login') {
    return {
      msg: '登录'
    }
  }
}

module.exports = handleUserRouter