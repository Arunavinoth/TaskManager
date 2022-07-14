const gettasks = function (req, res) {
    res.render('tasks');
};

const addtasks = function (req, res) {
    res.render('addTask');
}

const edittasks = function (req, res) {
    res.render('addTask');
}

module.exports = {
    gettasks,
    addtasks,
    edittasks
}