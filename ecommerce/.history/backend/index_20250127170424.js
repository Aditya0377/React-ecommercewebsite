import express from 'express';
import mongoose from 'mongoose';
import bookMod from './Bookshcema.js';
import userMod from './UserSchema.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello")
})

mongoose.connect('mongodb://127.0.0.1:27017/school', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected')
}).catch((err) => {
    console.log(err)
})
app.post("/signup", (req, res) => {
    console.log(req.body)
    res.send("data received")
})
app.get('/books', async (req, res) => {
    const data = await bookMod.find();
    res.json(data)
})



app.listen(3000, () => {
    console.log('server started')
})
