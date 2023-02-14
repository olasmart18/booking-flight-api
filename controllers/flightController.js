const users = require("../models/Flight")


// get all user
exports.getAllFlight = async (req, res) => {
    try {
        const foundUsers = await users.find({});
        res.status(200).json({
            success: true,
            count: foundUsers.length,
            message: "All booked flight found",
            data: foundUsers
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "booked flight not found",
        })
    }
}

//book new flight
exports.bookFlight = async (req, res) => {
    const newUser = new users(req.body);
    try {
        const saveNewUser = await newUser.save();
        res.status(200).json({
            success: true,
            message: "new user flight booked saved",
            data: saveNewUser
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "cannot book flight",
        })
    }
    newUser.save((err) => {
        if (!err) {
            res.send("flight has been booked")
        } else {
            res.send(err)
        }
    })
}

// get single user
exports.getMyFlight = async (req, res) => {
    const id = req.params.id
    try {
        const foundUser = await users.findById(id);
        res.status(200).json({
            success: true,
            message: "User found",
            data: foundUser
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "user not found",
        })
    }
}

// update a booked flight
exports.updateFlight = async (req, res) => {
    const id = req.params.id;
    try {
        const updateFlight = await users.findByIdAndUpdate(id,
            { $set: req.body },
            { new: true });
        res.status(200).json({
            success: "true",
            message: "flight updated successful",
            data: updateFlight
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "cannot update flight",
        })
    }
}