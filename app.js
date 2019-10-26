const http = require('http')
const querystring = require('querystring')

// http://localhost:3000/api/bloglist?id=123456&name=kuma

const server = http.createServer((req, res) => {
  console.log(req.method)
  const url = req.url
  console.log(url)
  req.query = querystring.parse(url.split('?')[1])
  console.log(req.query);
  res.end(
    JSON.stringify(req.query)
  )
})

server.listen(3000, () => {
  console.log('listening on 3000 port');
})