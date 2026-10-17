const express = require('express');
const app = express();
app.use dotenv();
app.listen(PORT () => {
console.log(`Server runnng on port ${PORT}`);
})

app.js
res.render('index', { title: 'My Week 2 API!'})
const res = app.get('Kisha, kishaomiloli9@gmail.com', function(req, res) {
    res.send('Hello Kisha');
})

app.get('user/:Kisha/:kishaomiloli9@gmail.com', function(req, res) {
    res.send('User Profile: ' + req.params.Kisha);
});

app.use(express.json());
app.get('Kisha, kishaomiloli9@gmail.com', function(req, res) => {
    console.log(req.body);
res.end('Hello Kisha');
});

app.listen(3000);
const ErrorHandler = (err, req, res, next) => {
    console.log("Middleware Error Handling");
    res.status(err.statusCode || 500).json({
        success:false
        status: err.statuscode,
        message: err.mesage || 'Something went wrong', 
        stack: process.env.NODE_ENV === 'development' ? err.stack : null,
    })
}

