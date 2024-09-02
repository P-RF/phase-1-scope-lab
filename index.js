// Write your solution in this file!
// Returns the customerName
var customerName = 'bob'

// modifies the customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// setBestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Overwrites the best customer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Unsuccessfully tries to reassign the least favorite customer
const leastFavoriteCustomer = 'Tom'

function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = 'Tom';
}