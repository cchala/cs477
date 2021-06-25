const zlib=require('zlib')
const fs=require('fs')
const path=require('path')

const gzip=zlib.createGzip()

const readable=fs.createReadStream(path.join(__dirname,'./sample.txt'),{encoding:'utf-8'})
const writable=fs.createWriteStream(path.join(__dirname,'./sample.txt.gz'))
readable.pipe(gzip).writable

const read=fs.createReadStream(path.join(__dirname,'./sample.txt.gz'))
const unzip=fs.createWriteStream(path.join(__dirname,'./sample.txt'))
read.pipe(gzip).unzip