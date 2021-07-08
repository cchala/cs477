const User=require('../models/user')
const jwt=require('jsonwebtoken')
const secret='chimdi shopping'

exports.login=(req,res,next)=>{
    const user=new User(req.body.username, req.body.password,null).login()
    if(user){
        const accessToken=jwt.sign({username:user.username, role:user.role},secret)
        res.json({accessToken})
    }else{
        res.status(200).json({'error':'Invalid username and password'})
    }
}

exports.authorization=(req,res,next)=>{
   const authHeader=req.headers.authorization;
   if(authHeader){
      const jwtToken=authHeader.split(' ')[1]
    //   jwt.verify(jwtToken,secret,(err,user)=>{
        
    //     if(err){
    //           res.status(403).json({err:"forbidden"})
    //       }
    //          req.user=payload;
    //           next()// this helps to excute other
    //   })
//    }else{
//     res.status(401).json({error:"unauthorized"})
//    }
    try{
      const payload=jwt.verify(jwtToken,secret)
      req.user=payload;
      next()  
    }catch(error){
      res.status(403).json({error:"forbidden"})
    }
   }else{
       res.status(401).json({error:"unauthorized"})
   }
}

exports.authorizationAdmin=(req,res,next)=>{
    if(req.user.role==='admin'){
        next();
    }else{
        res.status(403).json({error:'forbidden'})
    }
}

