let express = require('express');
const path = require('path');
const request = require('request-promise');
const options = {
    method: 'GET',
    uri: 'https://jsonplaceholder.typicode.com/users',
    json: true
};

let app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join('index.html'));
});
app.get('/users', (req, res) => {
    request(options)
        .then((data) => res.send(data))
        .catch((err) => new Error(err))
});
app.listen(3333, () => console.log('Server is running'));
