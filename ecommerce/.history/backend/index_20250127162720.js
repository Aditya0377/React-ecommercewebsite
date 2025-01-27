import express from 'express';
import mongoose from 'mongoose';
import bookMod from './Bookshcema.js';
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello")
})

mongoose.connect(' mongodb://127.0.0.1:27017/school', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected')
}).catch((err) => {
    console.log(err)
})
app.get('/books', async (req, res) => {
    const data = await bookMod.find();
    res.json(data)
})


app.listen(3000, () => {
    console.log('server started')
})
