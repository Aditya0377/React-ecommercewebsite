import express from 'express';
import mongoose from 'mongoose';
import bookMod from './Bookshcema.js';
const app = express();
app.get("/", (req, res) => {
    res.send("Hello")
})

mongoose.connect('mongodb://localhost:27017/school')


app.listen(3000, () => {
    console.log('server started')
})
