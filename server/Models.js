const mongoose = require("mongoose");
const schemas = require("./Schemas");

const User = new mongoose.model("User", schemas.UserSchema);
const Advertisement = new mongoose.model("Advertisement", schemas.AdtSchema);

module.exports = {
    User,
    Advertisement
}