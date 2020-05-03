let express = require('express');
const fs = require('fs');
const path = require('path');

let app = express();
app.use(express.static(path.join(__dirname, 'public')));
fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf-8',
    (err, data) => {
    if (err) {
        throw new Error(err);
    }else {
        app.get('/', (req, res) => {
            res.send(data);
            });
        }
});
app.listen(3333, () => console.log('Server is running'));
