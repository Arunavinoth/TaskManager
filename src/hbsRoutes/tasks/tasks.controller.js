const tasksService = require('../../api/tasks/tasks.service')
const userService = require('../../api/users/users.service')

const gettasks = function (req, res) {
    // res.render('tasks', {
    //     title: 'Tasks'
    // });

    tasksService.getTasks(req).then(function (tasks) {
        console.log('tasks', tasks);
        res.render('tasks', {
            title: 'Tasks',
            tasks
        });
    }).catch(function (error) {
        res.status(500).send('unable to render the page');
    })

};

const addtasks = function (req, res) {
    userService.getUsers(req).then(function(users){
        res.render('addTask', {
            title: 'Add Taks',
            users
        })    
    }).catch(function(error){
        res.status(500).send('unable to render');
    })  
}

const edittasks = function (req, res) {
    res.render('addTask');
}

module.exports = {
    gettasks,
    addtasks,
    edittasks
}