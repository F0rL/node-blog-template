const http = require('http')

const server = http.createServer((req, res) => {
  // 模拟日志
  console.log('cur time', Date.now());
  // 模拟错误
  console.error('假装出错', Date.now());

  //模拟一个错误
  if (req.url === '/err') {
    throw new Error('/err 出错了')
  }
  res.setHeader('Content-type', 'application/json')
  res.end(
    JSON.stringify({
      errno: 0,
      mgs: 'pm2 test server 1'
    })
  )
})

server.listen(3000, () => {
  console.log('server is running on port 3000');
})
// pm2 start
// pm2 stop
// pm2 start
// pm2 list
// pm2 restart id||name
// pm2 info id||name
// pm2 log id||name
// pm2 monit