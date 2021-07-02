const express=require('express')
const router = express.Router();

router.get('/add', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'user.html'));
});

router.post('/add', (req, res, next)=> {
    console.log(req.body); 
    res.send('save successfully');
});


module.exports = router;