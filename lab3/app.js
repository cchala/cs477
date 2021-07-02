const http=require('http');
const fs=require('fs')

http.createServer(function(req,res){
    if(req.url==='/'){
        fs.createReadStream('app.html').pipe(res)
    }else if(req.url==='/justsubmit' && req.method==='POST'){
        const mydata=[]
        req.on('data', function(chunk){
            mydata.push(chunk)
        })
        req.on('end',()=>{
            const currentData=Buffer.concat(mydata).toString();
            let arrOftex=currentData.split('=');
            console.log(arrOftex)
            let textArr=arrOftex[1].split('+')
            let exactText=textArr.join(' ')
            console.log(exactText)
            fs.writeFile('./just.txt',`${exactText}`,function(err){
                if(err) throw err; 
                //else res.write("saving successfully")
            })
        })
        // req.on('end',()=>{
        //     const currentData=Buffer.concat(mydata).toString();
        //     let arrOftex=currentData.split('=');
        //     console.log(arrOftex)
        //     let textArr=arrOftex[1].split('+')
        //     console.log(textArr)
        //     let sum=0;
        //     for(let key of textArr){
        //         sum+=parseInt(key)
        //         console.log(sum)
        //     }
        //     //let exactText=textArr.join(' ')
        //     //console.log(exactText)
        //     fs.writeFile('./just.txt',`${sum}`,function(err){
        //         if(err) throw err; 
        //         //else res.write("saving successfully")
        //     })
        // })
        // req.on('end',()=>{
        //     const currentData=Buffer.concat(mydata).toString();
        //     let arrOftex=currentData.split('&');
        //     console.log(arrOftex)
        //     let course1=arrOftex[0].split('=')
        //     console.log(course1)
        //     let course2=arrOftex[1].split('=')
        //     console.log(course2)
        //     // let textArr=arrOftex[1].split('+')
        //     // let exactText=textArr.join(' ')
        //     //console.log(exactText)
        //     fs.writeFile('./just.txt',`${course1} and ${course2}`,function(err){
        //         if(err) throw err; 
        //         //else res.write("saving successfully")
        //     })
        // })
        res.statusCode = 302;
        res.setHeader("Location", "/");
         res.end();
    }else{

     fs.createReadStream('app.html').pipe(res)
     res.end();
    }
}).listen(3001)
