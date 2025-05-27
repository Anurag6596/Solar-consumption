require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const connectDB = require('./connection/db');
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

//Routes 

// const indexRouter = require('./routes/index');
// app.use('/', indexRouter);


// start the server
const PORT = process.env.PORT || PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});