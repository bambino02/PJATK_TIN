const fs = require('fs');

let file;
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
    if (index === 2)
        file = val;
    else {
        console.log("parameters are wrong")
    }
});

fs.watch(file, (event, filename) => {
    if (filename) {
        fs.readFile(`${filename}`, 'utf8', (err, contents) => {
            console.log(event);
            console.log(contents);
        });
    }
});