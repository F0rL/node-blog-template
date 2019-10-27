const http = require('http')
const querystring = require('querystring')

// GET
// http://localhost:3000/api/bloglist?id=123456&name=kuma
// const server = http.createServer((req, res) => {
//   console.log(req.method)
//   const url = req.url
//   console.log(url)
//   req.query = querystring.parse(url.split('?')[1])
//   console.log(req.query);
//   res.end(
//     JSON.stringify(req.query)
//   )
// })

// POST
// http://localhost:3000
// const server = http.createServer((req, res) => {
//   if(req.method === 'POST'){
//     console.log('req content-type: ', req.headers['content-type'])
//     let postData = ''
//     req.on('data', chunk => {
//       postData += chunk.toString()
//     })
//     req.on('end', () => {
//       console.log('postData: ', postData);
//       res.end('hello kuma')
//     })
//   }
// })

const server = http.createServer((req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]
  const query = querystring.parse(url.split('?')[1])

  // 设置返回格式
  res.setHeader('Content-type', 'application/json')

  // 返回的数据
  let resData = {
    method,
    url,
    path,
    query
  }

  // 返回
  if(method === 'GET') {
    res.end(
      JSON.stringify(resData)
    )
  }

  if(method === 'POST') {
    let postData = ''
    req.on('data', chunk => [
      resData.postData += chunk.toString()
    ])
    req.on('end', () => {
      res.end(
        JSON.stringify(resData)
      )
    })
  }
})

server.listen(3000, () => {
  console.log('listening on 3000 port');
})