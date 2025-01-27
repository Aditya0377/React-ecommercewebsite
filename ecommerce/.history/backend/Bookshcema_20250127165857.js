import mongoose from 'mongoose';
const Schema = new mongoose.Schema({
    id: Number,
    title: String,
    price: Number,

})
const bookMod = mongoose.model('Books', Schema);
export default bookMod;
