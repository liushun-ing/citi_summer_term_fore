// 1. 导入http模块
const http = require("http");
const fs = require("fs");

// 2. 创建一个web服务器对象
const server = http.createServer();

// 3. 监听请求事件
server.on("request", (req, res) => {
  //req-->request 请求对象， res-->response 响应对象
  // 通过响应头设置返回前台数据格式及编码。（解决中文乱码的问题）
  res.setHeader("Content-Type", "application/json;charset=UTF-8");
  //res.write()表示向客户端输出的方法
  // res.write("hello world，你好nodejs");
  //res.end()每次响应完，需要调用此方法 来结束响束
  // res.end();

  let resData = {
    msg: "success",
    code: 2000
  };

  if (req.url == "/assets/table1.json") {
    fs.readFile("./assets/table1.json", function (err, data) {
      //data -buffer类型数据 （底层二进制数据）
      if (!err) {
        res.write(data.toString());
        res.end();
      }
    });
  } else if (req.url == "/assets/table2.json") {
    fs.readFile("./assets/table2.json", function (err, data) {
      //data -buffer类型数据 （底层二进制数据）
      if (!err) {
        res.write(data.toString());
        res.end();
      }
    });
  } else if (req.url == "/assets/chart.json") {
    fs.readFile("./assets/chart.json", function (err, data) {
      //data -buffer类型数据 （底层二进制数据）
      if (!err) {
        res.write(data.toString());
        res.end();
      }
    });
  } else if (req.url == "/favicon.ico") {
    fs.readFile("./favicon.ico", function (err, data) {
      if (!err) {
        res.write(data);
        res.end(data);
      }
    });
  } else if (req.url == "/buyStock") {
    //post请求的返回
    let postData = "";
    req.on("data", (chunk) => {
      //postData通过数据流的方式处理
      postData += chunk.toString();
    });
    req.on("end", () => {
      resData.postData = JSON.parse(postData);
      console.log(resData)
      res.write(JSON.stringify(resData))
      //返回
      res.end();
    });
  } else if (req.url == "/sellStock") {
    //post请求的返回
    let postData = "";
    req.on("data", (chunk) => {
      //postData通过数据流的方式处理
      postData += chunk.toString();
    });
    req.on("end", () => {
      resData.postData = JSON.parse(postData);
      console.log(resData)
      res.write(JSON.stringify(resData))
      //返回
      res.end();
    });
  } else if (req.url == "/nlp") {
    //post请求的返回
    let postData = "";
    req.on("data", (chunk) => {
      //postData通过数据流的方式处理
      postData += chunk.toString();
    });
    req.on("end", () => {
      resData.postData = JSON.parse(postData);
      console.log(resData)
      res.write(JSON.stringify(resData))
      //返回
      res.end();
    });
  }
});

// 4. 监听端口，为了避免端口冲突，这里给一个本机端口3000
server.listen(5500, () => {
  console.log("服务器启动成功");
});
