const path = require('path');
const fs = require('fs');
const os = require('os');
const http = require('http');


const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        res.end(`<h1>Form</h1>
                <form method="post" action="/">
                    <input name="title" type="text">
                    <button type="submit">Send</button>
                </form>`)
    }
}).listen(3000, () => console.log('Server running'));
/*fs.mkdir(path.join(__dirname, 'test'), err => {
    if (err) {
        throw new Error(err);
    }
    console.log('Folder has been created');
});
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'hello Yan', err => {
    if (err) {
        throw new Error(err);
    }
    console.log('File has been created');
});*/
/*fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' \nhello Helen', err => {
    if (err) {
        throw new Error(err);
    }
    console.log('File has been edited');
});*/
/*fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf-8', (err, data) => {
    if (err) {
        throw new Error(err);
    }
    console.log(data);
});*/
/*fs.rename(path.join(__dirname, 'test', 'hello.txt'),
    path.join(__dirname, 'test', 'goodbye.txt'),
    err => {
        if (err) {
            throw new Error(err);
        }
        console.log('File has been renamed');
    });*/
/*console.log(os.arch());
console.log(os.platform());
// console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());
console.log(os.userInfo());
console.log(os.uptime()/60);*/
