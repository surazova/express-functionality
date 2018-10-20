const express = require('express'); //bringing in the entire express library, we change it to cons because it stays the same 
const app = express(); //creating the actual application in the server 
const bodyParser = require('body-parser'); //adding middleware 

app.use(bodyParser.urlencoded({extended: false})); //using standard url encoded data 
app.use(bodyParser.json()) //data that you get is converted into json format 

app.get('/', (request, response) => response.send('<h1>hello</h1>'))

app.get('/test', (req, res) => res.send('<h1>test route</h1>'))

// app.get('/test/:num', (req,res) => res.send(`<h1>${req.params.num}</h1>`)) //: means that it is a varialbe and something gets put inside of num, we access the url parameters 

app.get('/test/add/:num', (req,res) => {
    const num = parseInt(req.params.num, 10); //parseINT changes a number to a string, 10 means base ten numbers  
    res.send(`<h1>${5+num}</h1>`)
}) //data type: string 

app.get('/test/subtract', (req,res) => {
    const num = parseInt(req.query.num, 10); 
    res.send(`<h1>${num - 5}</h1>`)  //to run on browswer: https://master-workspace-surazova.c9users.io/test/subtract?num=10
})

app.post('/test/multiply', (req,res) => {
    const num = parseInt(req.body.num, 10);
    res.json({result: num * 5})
})
const port = process.env.PORT || 5000 //= is the assignment operator 

app.listen(port, () => console.log(`App listening on port ${port}`)) //created an arrow function, changed the syntax to ES6, backtick and adding string interpolation
