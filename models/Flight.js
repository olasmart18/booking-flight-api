const { Schema, model} = require("mongoose")

const flightUserSchema =  Schema({
    name: String,
    from: String,
    To: String
});

const User =  model("User", flightUserSchema);

module.exports = User;