//Adding mongoose to project
const mongoose = require('mongoose');

//error handling
connect().catch(err => console.log(err));

//function to connect to database
async function connect() {
    await mongoose.connect('mongodb+srv://connal:test123@cluster0.afzhdiu.mongodb.net/?retryWrites=true&w=majority');
}

//export function
module.exports = {
    connect
}