const server = require("http");
const fs = require("fs");
const url = require("url");

const myServer = server.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()} ${req.url} : new req received\n`;
  const myurl = url.parse(req.url, true);
  console.log(myurl);
  
  fs.appendFile("./log.txt", log, (err, data) => {
    // if(err){
    //     console.log("Error found:", err)
    // }else{
    //     console.log("Received Data:", data);
    // }

    switch (myurl.pathname) {
      case "/":
        res.end("Welcome to home page");
        break;
      case "/contactMe":
        res.end("Contact me");
        break;
      case "/about":
        const userName = myurl.query.myname;
        res.end(`Hello my name is, ${userName}`);
        break;

      case "/search":
        const result = myurl.query.search_query;
        res.end(`result is, ${result}`);
        break;

      default:
        res.end("404 Not Found");
    }
  });
});

myServer.listen(8000, () => console.log("Server started"));
