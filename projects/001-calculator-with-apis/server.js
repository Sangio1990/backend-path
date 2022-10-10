const express = require('express')
const bodyParser = require('body-parser')

// Running the server
const app = express();
app.use(bodyParser.json())
app.listen(8000, () => console.log("Server running at 8000"));

//Setting the homepage
app.get("", (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is an API learning server, use postman instead');
});

//Setting some generic functions
function returnNumbers(req) {
    var body = req.body;
    var numbers = [];
    for (let n in body.numbers){
        numbers.push(parseFloat(body.numbers[n]));
    }
    return numbers;
}

//Setting the APIs
app.get("/API/sum", (req, res) =>{
    var total = 0;
    var numbers = returnNumbers(req);
    for (let n in numbers){
        total += numbers[n];
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`The sum total is ${total}`);
})

app.get("/API/mul", (req, res) => {
    var total = 1;
    var numbers = returnNumbers(req)
    for (let n in numbers){
        total *= numbers[n];
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`The multiplication total is ${total}`);

})

app.get("/API/div", (req, res)=>{
    var numbers = returnNumbers(req)
    var total = numbers[0];
    for (let n in numbers){
        if (n != 0){
            total /= numbers[n];
        }
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`The division total is ${total}`);
})

app.get("/API/sub", (req, res) => {
    var numbers = returnNumbers(req)
    var total = numbers[0];
    for (let n in numbers){
        if (n != 0){
            total -= numbers[n];
        }
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`The subtraction total is ${total}`);
})