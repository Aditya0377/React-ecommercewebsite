import mongoose from 'mongoose';
const Schema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,

})
const bookMod = mongoose.model('Books', Schema);
export default bookMod;
