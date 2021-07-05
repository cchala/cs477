const express=require('express')
const bookRouters=require('./routes/bookRoutes')
const cors=require('cors');
const { static } = require('express');
const app=express();

const urlencodedParser = express.urlencoded({ extended: false })
app.use(cors())
app.use(express.json())

app.use(bookRouters)


app.listen(3000, ()=>{console.log("server is running on 3000.....")})