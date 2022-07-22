const userService = require('../../api/users/users.service');
const Users = require('../../models/users');

const getUsers = function (req, res) {
    // const stdObj = {
    //     name: 'Arun',
    //     age: 23
    // }

    // 
    
    userService.getUsers(req).then(function(users){
        console.log('users', users);
        res.render('users', {
            title:'Users',
            users
            // name: 'Arun',
            // stdObj,
            // nameArr,
            // author: true,
            // stdArr
        });
    }).catch(function(error){
        res.status(500).send('unable to render the page');
    })    
}

const adduser = function (req, res) {
    res.render('addUser',{
        title: 'Add User',
        btnName: 'Save'
    });
    
}

const edituser = function (req, res) {
    userService.getUsersById(req).then(function(user){
        console.log('user',user);
        res.render('addUser',{
            title: 'Edit User',
            btnName:'Update',
            user
        });
    }).catch(function(error){
        res.status(500).send('unable to render the page');
    }) 
}

module.exports = {
    getUsers,
    adduser,
    edituser
}