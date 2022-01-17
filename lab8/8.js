const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '/form.html'));
});


app.post('/formdata', (req, res) => {
    res.send('<h1>Student ' + req.body.fname + ' ' + req.body.lname + ' has s-number ' + req.body.snumber + '</h1>');
});


app.post('/jsondata', (req, res) => {

    res.send('<h1>Persons name ' + req.body.name + ' ' + req.body.surname + ' with email ' + req.body.email + '</h1>');
});

app.listen(port, () => {
    console.log(`listen on  http://localhost:${port}`);
});