// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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