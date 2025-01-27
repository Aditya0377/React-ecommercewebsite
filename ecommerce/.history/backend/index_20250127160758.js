const express = require('express');
const mongoose = require('mongoose');
const Book = require('./Bookshcema');
const app = express();
app.get("/", (req, res) => {
    res.send("Hello")
})

mongoose.connnect('mongodb://localhost:27017/school')


app.listen(3000, () => {
    console.log('server started')
})
