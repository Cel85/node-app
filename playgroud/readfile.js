let fs = require('fs');
let content = null;

let readCallback = (err, data) => {
    if (err) {
        console.log(`Error occured ${err}`);
    } else {
        console.log(`${data}`)
    }
}

fs.readFile('test.txt', readCallback);