 const fs = require("fs")

 fs.writeFileSync("./test.txt", "Hello world"); // Create file 
  const result = fs.readFileSync("./test.txt", "utf-8") // Read file
  console.log(result);






 fs.writeFile("./asynctest.text", "Hello from async", ()=>{})
 fs.readFile("./asynctest.text", "utf-8",(err, data)=>{
    if(err){
       console.log(err);
    }else{
        console.log( "Result data:", data);
    }
 })

 fs.copyFile("./test.txt", "./copy.txt", ()=>{})
 fs.unlinkSync("./copy.txt")

 
 console.log(fs.statSync("./test.txt"));