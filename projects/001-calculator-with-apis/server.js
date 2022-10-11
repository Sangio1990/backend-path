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
    // I'm not handling errors for now, assuming the data given is always an
    // array of floating numbers, in case here is the place where the error handling happens.
    let numbers = [];
    const body = req.body;
    body.numbers.forEach(num => numbers.push(parseFloat(num)));
    return numbers;
}

//Setting the APIs
app.get("/api/sum", (req, res) =>{
    const numbers = returnNumbers(req);
    let total = 0;
    numbers.forEach(num => total += num);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`The sum total is ${total}`);
})

app.get("/api/mul", (req, res) => {
    const numbers = returnNumbers(req)
    let total = 1;
    numbers.forEach(num => total *= num);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`The multiplication total is ${total}`);

})

app.get("/api/div", (req, res)=>{
    const numbers = returnNumbers(req)
    let total = numbers[0];
    numbers.forEach(((num, index) =>{
        if (index != 0){
            total /= num
        }}));;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`The division total is ${total}`);
})

app.get("/api/sub", (req, res) => {
    const numbers = returnNumbers(req)
    let total = numbers[0];
    numbers.forEach(((num, index) =>{
        if (index != 0){
            total -= num
        }}));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`The subtraction total is ${total}`);
})