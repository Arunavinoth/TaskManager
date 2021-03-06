const service = require("./tasks.service");

const getTasks = function (req, res) {
    service.getTasks(req).then(function (tasks) {
        res.status(200).send(users);
    }).catch(function (e) {
        res.status(500).send("Internal Server Error");
    })
}

const getTaskById = function (req, res) {
    service.getTaskById(req).then(function (task) {
        res.status(200).send(user);
    }).catch(function (e) {
        res.status(500).send("Internal Server Error");
    })
}

const saveTask = function (req, res) {
    service.saveTask(req).then(function (task) {
        res.status(201).send("User saved sucessfully");
    }).catch(function (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    })
}

const updateTask = function (req, res) {
    service.updateTask(req).then(function (task) {
        res.status(201).send("User updated");
    }).catch(function (e) {
        res.status(500).send("Internal Server Error");
    })
}

const deleteTask = function (req, res) {
    service.deleteTask(req).then(function (task) {
        res.status(200).send("user deleted sucessfully");
    }).catch(function () {
        res.status(500).send("Internal Server Error");
    })
}

module.exports = {
    getTasks,
    getTaskById,
    saveTask,
    updateTask,
    deleteTask
}