// exports.exampleModel = [];
const mongoose = require("mongoose");
const { Schema, model} = require("mongoose")

mongoose.set("strictQuery", true)

try {
    mongoose.connect = ("mongodb://localhost:27017/flightDB")
    console.log("connected to db");
} catch (error) {
    console.log(error);
}

const flightUserSchema = Schema({
    name: String,
    dateOfFlight: Date,
    from: String,
    To: String
});

const User = model("User", flightUserSchema);

module.exports = User;