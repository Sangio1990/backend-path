const express = require('express')

// Running the server
const app = express();
app.listen(8000, () => console.log("Server running at 8000"));

//Setting the homepage
app.get("", (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('List of possible operations:\n');
});

//Setting the APIs
app.get("/API/sum", (req, res) =>{
    var num1 = parseInt(req.query.numbers[0])
    var num2 = parseInt(req.query.numbers[2])
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`The sum of ${num1} + ${num2} is ${num1+num2}`);
})