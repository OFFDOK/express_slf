var Task_User = require('../model/StudentModel');

module.exports = function (app) {
        
    app.post('/user/login', function (req, res) {    //  Not Controller
        Task_User.checkLogin(req.body, function (err, task) {
            console.log('controller')
            if (err)
                res.send(err);
            
            res.send(task);
        });
    })
    app.post('/user/register', function (req, res) {    //  Not Controller
        Task_User.registerUser(req.body, function (err, task) {
            console.log('controller')
            if (err)
                res.send(err);
            
            res.send(task);
        });
    })

    app.post('/user/getIntituteBy', function (req, res) {
        Task_User.getIntituteBy(function (err, task) {
            console.log('controller')
            if (err)
                res.send(err);
            
            res.send(task);
        });
    })
    
    app.post('/user/getSchoolOfByCode', function (req, res) {
        Task_User.getSchoolOfByCode(req.body, function (err, task) {
            console.log('controller')
            if (err)
                res.send(err);
            
            res.send(task);
        });
    })

    app.post('/user/getStudentByCode', function (req, res) {
        Task_User.getStudentByCode(req.body, function (err, task) {
            console.log('controller')
            if (err)
                res.send(err);
            
            res.send(task);
        });
    })
};

