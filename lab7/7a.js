const http = require('http');
const url = require('url')

const server = http.createServer((req, res) => {
    let query = url.parse(req.url, true).query;
    if (typeof query.num1 === undefined || query.num2 === undefined) {
        res.write(' path variables are missing' + '\n' + 'hint:?num1={}&num2={}');
    }

    try {
        var num1 = parseInt(query.num1);
        var num2 = parseInt(query.num2);
    } catch (error) {
        res.write('parameter must be integer');
        res.end();
    }

    const pathName = url.parse(req.url).pathname;
    if (pathName === '/add') {
        res.write(` Operation: Addition \n Path variables: num1=${num1}, num2=${num2}  \n Result: ${num1 + num2}`);
        res.end();
    } else if (pathName === '/sub') {
        res.write(` Operation: Subtraction \n Path variables: num1=${num1}, num2=${num2} \n Result: ${num1 - num2}`);
        res.end();
    } else if (pathName === '/mul') {
        res.write(` Operation: Multiplication \n Path variables: num1=${num1}, num2=${num2} \n Result: ${num1 * num2}`);
        res.end();
    } else if (pathName === '/div') {
        res.write(` Operation: Division \n Path variables: num1=${num1}, num2=${num2} \n Result: ${num1 / num2}`);
        res.end();
    } else {
        res.write("unknown path");
        res.end();
    }
});

server.listen(8080);