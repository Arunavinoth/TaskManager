const Users = require('../../models/users');

const getUsers = function (req) {
    try {
        return Users.find(req.query);
    } catch (e) {
        return e;
    }
}

const getUsersById = function (req) {
    try {
        return Users.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

const saveUsers = function (req) {
    try {
        var users = new Users(req.body);
        return users.save();
    } catch (e) {
        return e;
    }
}

const upadateUsers = function (req) {
    try {
        return Users.findByIdAndUpdate(req.params.id, req.body)
    } catch (e) {
        return e;
    }
}

const deleteUsers = function (req) {
    try {
        return Users.findByIdAndDelete(req.params.id)
    } catch (e) {
        return e;
    }
}

module.exports = {
    getUsers,
    getUsersById,
    saveUsers,
    upadateUsers,
    deleteUsers
}