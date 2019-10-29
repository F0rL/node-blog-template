const fs = require('fs')
const path = require('path')

const fileName = path.resolve(__dirname, 'log.txt')
// IO操作性能瓶颈
// 网络IO 和 文件IO
// 相比于CPU计算和内存读写，IO太慢


// 读取文件内容
// fs.readFile(fileName, (err, data) => {
//   if (err) {
//     console.err(err)
//     return
//   }
//   // data是二进制类型，要转换成字符串 获取的是所有文件，如果文件大会占资源
//   console.log(data.toString());
// })

// 写入文件
// const content = '这是新写入的内容\n'

// const opt = {
//   flag: 'a' // 追加写入，覆盖用'w'
// }

// fs.writeFile(fileName, content, opt, (err) => {
//   if (err) {
//     console.err(err)
//   }
// })

// 判断文件是否纯在
fs.exists(fileName, exist =>{
  console.log('exist: ', exist);
})