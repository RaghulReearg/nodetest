const http=require("http");
const fs=require("fs")
const _ =require("lodash")
const server=http.createServer((req,res)=>{
    let random=_.random(0,20);
    console.log(random)
    console.log("Started")
    res.setHeader("Content-Type","text/html")
    // res.write("Testing")
    // res.write("<h1>Hello fucking nodee</h1>")
    // res.end()
    let path="./routes/"
    switch(req.url){
        case "/":
            path+="index.html"
            res.statusCode=200
            break;
        case "/about":
            path+="about.html"
            res.statusCode=200

            break
        case "/about-me":
            res.setHeader("Location","/about")
            res.statusCode=301
            break
        default:
            path+="404.html"
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            res.write("Erorororororoororoororororoor");
            res.end()
        }
        else{
            res.end(data)
        }
    })

})
server.listen(3000,"localhost",()=>{
    console.log("server started")
})