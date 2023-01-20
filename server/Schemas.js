const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String
});

const AdtSchema = new Schema({
    type: String,
    area: Number,
    rent: Boolean,
    price: Number,
    city: String,
    street: String
})

module.exports = {
    UserSchema,
    AdtSchema
}