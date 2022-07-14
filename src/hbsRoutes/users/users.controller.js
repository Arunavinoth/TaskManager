const getUsers = function (req, res) {
    res.render('users');
};

const adduser = function (req, res) {
    res.render('addUser');
}

const edituser = function (req, res) {
    res.render('addUser');
}

module.exports = {
    getUsers,
    adduser,
    edituser
}