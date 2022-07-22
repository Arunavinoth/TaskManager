const service = require("./users.service");

const getUsers = function (req, res) {
    service.getUsers(req).then(function (users) {
        res.status(200).send(users);
    }).catch(function (e) {
        res.status(500).send("Internal Server Error");
    })
}

const getUsersById = function (req, res) {
    service.getUsersById(req).then(function (user) {
        res.status(200).send(user);
    }).catch(function (e) {
        res.status(500).send("Internal Server Error");
    })
}

const saveUsers = function (req, res) {
    service.saveUsers(req).then(function (user) {
        res.status(201).send("User saved sucessfully");
    }).catch(function (e) {
        res.status(500).send("Internal Server Error");
    })
}

const updateUsers = function (req, res) {
    service.updateUser(req).then(function (user) {
        res.status(201).send("User updated");
    }).catch(function (e) {
        res.status(500).send("Internal Server Error");
    })
}

const deleteUsers = function (req, res) {
    service.deleteUsers(req).then(function (user) {
        res.status(200).send("user deleted sucessfully");
    }).catch(function () {
        res.status(500).send("Internal Server Error");
    })
}

module.exports = {
    getUsers,
    getUsersById,
    saveUsers,
    updateUsers,
    deleteUsers
}