# Calculator with APIs

Reproduce a calculator just using APIs.

Create a list of endpoints to reproduce the operations of Sum, Subtraction, Multiply and Division.

Each API should:

- Accept a list of parameters within the body section
- Be called only with POST method
- Return the result of the operation, and provide an error if the params doesn't match the operation or the operation is not possible

### Documentation

What is a REST API: https://www.youtube.com/watch?v=lsMQRaeKNDk

### Solutions
Run the server with the command line </br> 
>node server.js </br>
while in the projects\001-calculator-with-apis folder, than use postman or a similar program to send a request to: http://localhost:8000/API/ 
/sum for the sum of the numbers
/div for the division of the numbers
/mul for the multiplication of the numbers
/sub for the subtraction of the numbers
In the body send a Json file with the body:
{
    "numbers": [list, of, numbers]
}