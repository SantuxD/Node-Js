const server = require("http");
const fs = require("fs");

const myServer = server.createServer((req, res) => {
    const log = `${Date.now()} ${req.url} ${req.headers}: new req received\n`
    fs.appendFile("./log.txt", log, (err, data) => {
        // if(err){
        //     console.log("Error found:", err)
        // }else{
        //     console.log("Received Data:", data);
        // }


        switch (req.url) {
            case "/":
                res.end("Welcome to home page")
                break;
            case "/contactMe":
                res.end("Contact me")
                break;
            case "/about":
                res.end("About me")
                break;
            default:
                res.end("404 Not Found")

        }
        
    })


});

myServer.listen(8000, () => console.log('Server started'))