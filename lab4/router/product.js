const express=require('express')
const router = express.Router();

router.get('/add', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'product.html'));
});

router.post('/add', (req, res, next)=> {
    console.log(req.body); //save to DB
    res.send('save successfully');
});


module.exports = router;