 const fs = require("fs")

 fs.writeFileSync("./test.txt", "Hello world"); // Create file  in sync 
  const result = fs.readFileSync("./test.txt", "utf-8") // Read file
  console.log(result);






 fs.writeFile("./asynctest.text", "Hello from async", ()=>{}) // create file in async 
 fs.readFile("./asynctest.text", "utf-8",(err, data)=>{
    if(err){
       console.log(err);
    }else{
        console.log( "Result data:", data);
    }
 })

 fs.copyFile("./test.txt", "./copy.txt", ()=>{}) // copy file
 fs.unlinkSync("./copy.txt") // delete file

 
 console.log(fs.statSync("./test.txt")); // show file stats