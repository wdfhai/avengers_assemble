// Dependencies

const express = require('express');
const path = require('path');
const fs = require('fs')
let tables = require('./db/tables.json')
let wait = require('./db/wait.json');
// const { table } = require('console');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(__dirname + '/public'));

// Data
let allCustomers = [
    {
        routeName: 'jamesbond',
        customerName: 'James Bond',
        phoneNumber: '555-1234',
        customerEmail: 'mrbond@kill.com',
        customerID: '007'
    }
];

// routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, 'reservations.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/api/tables', (req, res) => res.json(tables));

app.get('/api/wait', (req, res) => res.json(wait));

// Create New Customers - takes in JSON input
app.post('/api/customers', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const customer = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newCustomer.customerID = newCustomer.name.replace(/\s+/g, '').toLowerCase();
    console.log(newCustomer);

    characters.push(newCustomer);
    res.json(newCustomer);
});


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));