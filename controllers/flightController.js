const user = require("../models/Flight")

exports.getAllFlight = (req, res) => {
    res.send("all flight")
}

exports.bookFlight = function(req, res){
    res.send("bood new flight")
}

exports.getMyFlight = (req, res) => {
    res.send("see my flight")
}