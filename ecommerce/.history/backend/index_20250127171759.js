import express from 'express';
import mongoose from 'mongoose';
import bookMod from './Bookshcema.js';
import userMod from './UserSchema.js';
import cors from 'cors';
import bcrypt from 'bcryptjs';

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
app.get('/books', async (req, res) => {
    const data = await bookMod.find();
    res.json(data)
})

app.post("/signup", async (req, res) => {
    try {
        const { id, name, age, password } = req.body;
        if (!id || !name || !age || !password) {
            return res.status(422).json({ error: "Please fill all the fields" })
        }
        const existingUser = await userMod.findOne({ name });
        if (existingUser) {
            return res.status(422).json({ error: "User already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new userMod({ id, name, age, password: hashedPassword });
        await newUser.save();

    }
    catch (err) {
        return res.status(500).json({ error: "Internal server error" })
    }
})



app.listen(3000, () => {
    console.log('server started')
})
