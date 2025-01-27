import express from 'express';
import mongoose from 'mongoose';
import bookMod from './Bookshcema.js';
const app = express();
app.get("/", (req, res) => {
    res.send("Hello")
})

mongoose.connect('mongodb://localhost:27017/school')
app.get("localhost:3000/books", async (req, res) => {
    const books = await bookMod.find()
    res.json(books)
})

app.listen(3000, () => {
    console.log('server started')
})
