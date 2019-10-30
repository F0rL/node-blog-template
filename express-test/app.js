const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('请求开始');
  next()
})

app.use((req, res, next) => {
  req.cookies = {
    userId: 'abc'
  }
  next()
})

app.use((req, res, next) => {
  setTimeout(() => {
    req.body = {
      a: 100,
      b: 200
    }
    next()
  })
})

app.use('/api', (req, res, next) =>{
  console.log('处理/api路由');
  next()
})

app.get('/api', (req, res, next) => {
  console.log('get 方法');
  next()
})

app.post('/api', (req, res, next) => {
  console.log('post 方法');
})

app.get('/api/getcookie',checkCookie ,(req, res, next) => {
  console.log('get /api/get-cookie')
  res.json({
    errno: 0,
    data: req.cookies
  })
})

// 中间件
function checkCookie(req, res, next){
  console.log('登录成功');
  console.log(req.body);
  next()
}

app.post('/api/get-post-data', (req, res, next) => {
  console.log('post api/get-post-data')
  res.json({
    errno: 0,
    data: req.body
  })
})


app.use((req, res, next) =>{
  console.log('404');
  res.json({
    errno: -1,
    msg: '404 not found'
  })
})

app.listen(3000, ()=>{
  console.log('server is running on 3000 port');
})