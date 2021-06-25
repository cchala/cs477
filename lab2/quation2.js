const fs=require('fs')
const path=require('path')
const http=require('http')

const server=http.createServer();
server.on('request',function(request,respond){
    fs.createReadStream('./bigPicture.png').pipe(respond)
}).listen(8080)

// const server=http.createServer(function(req,resp){
//    let resu= fs.readFileSync('./bigPicture.png')
//    resp.end(resu)
// }).listen(8080)