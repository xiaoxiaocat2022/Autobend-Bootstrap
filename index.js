const http = require('http')

// 3-1. 导入 fs
const fs = require('fs')

// 1-2. 创建服务
const server = http.createServer(function (req, res) {

  // 2. 根据不同的请求给出不同的响应
  // 2-1. 拿到 req 里面的 url 信息
  const { url } = req

  // 2-2. 条件判断
  const reg = /^\/\w+\.(html|css|js|png)$/
  const result = reg.exec(url)
  if (result) {
    fs.readFile('./' + result[1] + result[0], (err, data) => {
      if (err) return console.log(err)

      res.end(data)
    })
  } else {
    // 我们暂时不管其他的内容
    res.end(`
      <h1>404</h1>
      <p>您要找的内容不在家, 一会再来!</p>
    `)
  }
  /*
    null  表示不是 三种后缀的文件

    有结果
    [
      0: /index.html    /index.css     /index.js
      1: html           css            js
    ]
  */

})

// 1-3. 监听端口
//      范围: 0 ~ 65535
//      尽量不使用 1024 以下
server.listen(8080, () => console.log(' server running at port 8080 ! @-@ '))