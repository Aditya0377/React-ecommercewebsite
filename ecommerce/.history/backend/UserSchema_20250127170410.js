import mongoose from "mongoose";
const Schema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    password: String,

})
const userMod = mongoose.model('Users', Schema);
export default userMod;