const service = require("./admin.service");

const getAdmins = function (req, res) {
    service.getAdmins(req).then(function (admin) {
        res.status(200).send(admin);
    }).catch(function (e) {
        res.status(500).send("Internal Server Error");
    })
}

const getAdminById = function (req, res) {
    service.getAdminById(req).then(function (admin) {
        res.status(200).send(admin);
    }).catch(function (e) {
        res.status(500).send("Internal Server Error");
    })
}

const saveAdmin = function (req, res) {
    service.saveAdmin(req).then(function (admin) {
        res.status(201).send("Admin saved sucessfully");
    }).catch(function (e) {
        res.status(500).send("Internal Server Error");
    })
}

const upadateAdmin = function (req, res) {
    service.upadateAdmin(req).then(function (admin) {
        res.status(201).send("Admin upadated");
    }).catch(function (e) {
        res.status(500).send("Internal Server Error");
    })
}

const deleteAdmin = function (req, res) {
    service.deleteAdmin(req).then(function (admin) {
        res.status(200).send("Admin deleted sucessfully");
    }).catch(function () {
        res.status(500).send("Internal Server Error");
    })
}

module.exports = {
    getAdmins,
    getAdminById,
    saveAdmin,
    upadateAdmin,
    deleteAdmin
}