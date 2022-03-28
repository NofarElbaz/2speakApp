//const express = require('express');
const mongoose = require('mongoose') 
//const app = express();
const mongoUri = 'mongodb+srv://NN:NN2021@cluster0.w8zew.mongodb.net/2speak?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log("connected to 2speekDB")
});

mongoose.connection.on('Error', (err) => {
    console.error('Error connecting to 2speekDB' ,err)
});

var Schema = mongoose.Schema;
var wordSchema = new Schema({
    id : Number,
    name : String,
    recordsUri : [],
    imagePath : String
  });

var word = mongoose.model('Words', wordSchema );

