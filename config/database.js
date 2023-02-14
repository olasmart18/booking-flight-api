const mongoose = require("mongoose");

mongoose.set("strictQuery", true)

const connect = async function (err) {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/flightDB");
        console.log("connected to db");
    } catch (error) {
        console.log(error);
        throw new Error("cannot connect to db")
    }
}
module.exports = connect;