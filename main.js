// const fs =require("fs")
// console.log(fs)


// console.log("start")
// // fs.writeFileSync("sufyan.txt","I am  good boy")
// fs.writeFile("sufyan2.txt", "i am a boy", ()=>{
//     console.log("done")
//     fs.readFile("sufyan2.txt", (error,data)=>{
//         console.log(error,data.toString())
//     })
// })
// fs.appendFile("sufyan2.txt"," yo yo",(e,d)=>{
//     console.log(d)
// })
// console.log("ending")

// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const express = require('express')
const blog = require('./routes/blog')

// ...





const app = express()
const port = 3000
app.use(express.static('public'))
app.use('/blog', blog)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/m', (req, res) => {
  res.send('Hello World2!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
