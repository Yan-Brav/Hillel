const express = require('express');
/*const fs = require('fs');
const path = require('path');*/
const bodyParser = require('body-parser');
let MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

let app = express(); //creating server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
let db;
const url = 'mongodb://localhost:27017';
const dbname = "myDB";
const client = new MongoClient(url); //connection to db


app.get('/', (req, res) => res.send('Hello Express'));
//Get all students
app.get('/students', (req, res) => {
    db.collection('students').find().toArray((err, docs) => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});
// Get students by id
app.get('/students/:id', (req, res) => {
    db.collection('students').findOne({_id: ObjectID(req.params.id)}, (err, docs) => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});
//Get student by name
app.get('/students/name/:name', (req, res) => {
    db.collection('students').findOne({name: req.params.name}, (err, docs) => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});
//Get student by last name
app.get('/students/lastName/:lastName', (req, res) => {
    db.collection('students').findOne({lastName: req.params.lastName}, (err, docs) => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});

app.post('/students', (req, res) => {
    let student = {
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age,
        rate: {
            base: req.body.rate.base,
            weight: req.body.rate.weight
        }
    };
    student.rate.penalty = student.rate.weight < 12 ? student.rate.base - student.rate.weight : 0;

        db.collection('students').insertOne(student, err => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }

        res.send(student);
    })
});

app.delete('/students/:id', (req, res) => {
    db.collection('students').remove({_id: ObjectID(req.params.id)}, (err) => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

app.put('/students/:id', (req, res) => {
    db.collection('students').update({_id: ObjectID(req.params.id)}, {name: req.body.name, age: req.body.age || 57}, (err) => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

client.connect(err => {
    if (err) {
        console.log(err);
    }
    console.log('Connection success');
    db = client.db(dbname);
    app.listen(3333, () => console.log('Server is running...'));
    // client.close();
});




/*let students = [{
    id:1,
    name: 'Max',
    surname: 'Petrov',
    age: 100
},{
    id:2,
    name: 'Serg',
    surname: 'Ivanov',
    age: 50
}];

app.get('/', (req, res) => res.send('Hello Express'));

app.get('/students', (req, res) => res.send(students));
app.get('/students/:id', (req, res) => {
    let student = students.find(student => student.id === Number(req.params.id));
    res.send(student);
});
app.post('/students', (req, res) => {
    console.log(req.body);
    let student = {
        id: Date.now(),
        name: req.body.name
    };
    students.push(student);
    res.send(student);
});
app.put('/students/:id', (req, res) => {
    let student = students.find(student => student.id === Number(req.params.id));
        student.name =  req.body.name;
        res.sendStatus(200);
});
app.delete('/students/:id', (req, res) => {
    students = students.filter(student => student.id !== Number(req.params.id))
    res.sendStatus(200);
});
app.listen(3333, () => console.log('Server running...'));*/


