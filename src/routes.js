const apiRoutes = function(app){
    //apiroutes
    app.use('/api/users', require('./api/users'));
    app.use('/api/tasks', require('./api/tasks'));
    app.use('/api/admin', require('./api/admin'));

    //hbs Routes
    app.use('/users', require('./hbsRoutes/users'));
    app.use('/tasks', require('./hbsRoutes/tasks'));
}

module.exports = {
    apiRoutes
}