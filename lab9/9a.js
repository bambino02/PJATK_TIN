const bodyParser = require('body-parser');
const express = require('express');
var cors = require('cors');
const path = require('path');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/calculate', (req, res) => {
    var n1 = parseInt(req.body.n1);
    var n2 = parseInt(req.body.n2);
    var operation = req.body.operation;
    if (String(n1).match(/^-?\d+$/) && String(n2).match(/^-?\d+$/)) {
        switch (operation) {
            case 'add':
                var result = (Number(n1) + Number(n2));
                res.json({ result: result });
                break;
            case 'sub':
                var result = (Number(n1) - Number(n2));
                res.json({ result: result });
                break;
            case 'mul':
                var result = (Number(n1) * Number(n2));
                res.json({ result: result });
                break;
            case 'div':
                var result = (Number(n1) / Number(n2));
                res.json({ result: result });
                break;
            default:
                res.json({ result: 'wrong operation' });
        }
    } else {
        res.json({ result: 'wrong parameters' });
    }
});

app.listen(port, () => {
    console.log(`listen on http://localhost:${port}`);
});