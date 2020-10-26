// console.log("Test")
// const greet=(name)=>{
// console.log(`Welocme ${name}`)
// }
// greet("Raghul")
// greet("reerag")

// console.log(global)
// setTimeout(() => {
//     console.log("in the timeout")
    
// }, 2000);

// console.log(__dirname)
// console.log(__filename)

// const {age,people}=require("./people.js")

// console.log(age);
// console.log(people)

// const os=require("os")
// console.log(os.platform())

const fs=require("fs")
// fs.readFile("./blog1.txt",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
    
// })
// fs.writeFile("./text.txt","test",()=>{
//     console.log("Finished")
// })

// fs.mkdir("./assets",err=>{
//     console.log("done")
// })
// if(fs.existsSync("./assets")){
//     fs.rmdir("./assets",()=>{
//         console.log("done deleting")
//     })
// }

// fs.unlink("./text.txt",err=>{
//     console.log("hello")
// })

const readstream=fs.createReadStream("./blog1.txt",{encoding:'utf8'})
const writestream=fs.createWriteStream("./blog3.txt")
readstream.on("data",(chunk)=>{
    console.log("_________________________________")
    console.log(chunk)
    writestream.write("\n-------------------------------------------\n")
    writestream.write(chunk)
})