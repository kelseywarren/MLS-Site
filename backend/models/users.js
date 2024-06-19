const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: Number,
    email: String,
    password: String
});

module.exports = mongoose.model('User', userSchema)