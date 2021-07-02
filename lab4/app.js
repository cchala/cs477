const express = require('express');
const prdRouter = require('./router/product');
const userRouter = require('./router/user');
const path = require('path');
const fs = require('path')
const app = express();

app.set('port', process.env.PORT || 3355);
const PORT = app.get('port');
console.log(PORT)
app.use(express.urlencoded({ extended: true }));
//app.set('query parser', 'extended'); //default case


app.use('/product', prdRouter);
app.use('/user', userRouter);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/resources/abc', express.static(path.join(__dirname, 'public', 'css')));

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'product.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use(function (err, req, res, next) {
    res.sendFile(path.join(__dirname, 'views', '500.html'));

});


app.listen(PORT, () => console.log(`listening on ${PORT} .........`));










// 4.middleware
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/resources/abc', express.static(path.join(__dirname, 'public', 'css')));

app.use(express.urlencoded({
    extended: true
}));



app.get('/', (req, res, next) => {
    res.send('This is my home page...');
})

app.use('/product', productRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use((err, req, res, next) => {
    console.log(err);
    res.sendFile(path.join(__dirname, 'views', '500.html'));
});

//7. bootup
app.listen(3333, () => console.log('your server is on ' + PORT));











/**
 * Create a npm project and install Express.js (Nodemon if you want)
Change your Express.js app which serves HTML files (of your choice with your content) for “/”, “/users” and “/products”.
For “/users” and “/products”, provides GET and POST requests handling (of your choice with your content) in different routers.
Add some static (.js or .css) files to your project that should be required by at least one of your HTML files.
Customize your 404 page
Provide your own error handling
 */