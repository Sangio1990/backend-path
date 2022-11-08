const express = require('express');
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


//Setting the APIs

app.get("/api/:date", (req, res)=>{
    let output = "Calculating"
    if (req.params.date == ":date"){
        const now = new Date();
        output = {"utc":now.toUTCString(), "unix":now.getTime()};
    } else {
        let temp = parseInt(req.params.date);
        let date = ""
        if ((typeof temp == "number") && ( isNaN(temp) == false )){
            date = new Date(temp);
        } else {
            date = new Date(req.params.date);
        };
        if (date == "Invalid Date"){
            output = {"error":"Invalid date"};
        } else {
            output = {"unix": date.getTime(), "utc": date.toUTCString()};
        };
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.json(output)
});
