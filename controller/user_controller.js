const Users = require("../models/User")

//function for adding user
exports.adduser = (req, res) => {
    const User = new Users(
        req.body)
    User.save().then(function () {
        res.send("User has been added")
    }).catch(function (e) {
        res.send(e)
    })
}

//function for Login Function
exports.login = async (req, res) => {
    try {
        const user = await Users.checkCrediantialsDb(req.body.email,
            req.body.password);
        const token = await user.generateAuthToken();
        res.json({
            token: token,
            user: user
        })
    }
    catch (e) {
        res.status(400).send()
        console.log(e);
    }
}
//update
exports.updateUser = async (req, res) => {
    Users.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("Update Succesfull")
        }).catch(function (e) {
            res.send(e)
        })
}

exports.userdetail = async (req, res) => {
    // console.log(req.params.id)
    Users.findById(req.params.id)
        .then(function (user) {
            res.json(user)
        }).catch(function (e) {
            res.send(e)
        })
}



//delete
exports.deleteUser = async (req, res) => {
    Users.findByIdAndDelete(req.params.id)
        .then(function () {
            res.send('Delete Successfull')
        }).catch(function (e) {
            res.send(e)
        })
}



