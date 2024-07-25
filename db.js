const mongoose = require('mongoose');
require('dotenv').config();

// Define the mongodb connection URL
//const mongoURL='mongodb://localhost:27017/hotels' //'hotels is database name'
const mongoURL = process.env.MONGODB_URL;

//Set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//Get the default connection
//Mongoose maintains a default connection object rpresenting the MongoDB connection
const db = mongoose.connection;

//Define event listeners for database connection
db.on('connected',()=>{
    console.log('Connected to MongoDB server');
}) 
db.on('error',(err)=>{
    console.log('MongoDB connection error: ',err);
}) 
db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
}) 

//Export the database connection
module.exports=db;

