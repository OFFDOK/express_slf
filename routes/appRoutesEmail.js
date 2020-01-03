var Task_Email = require('../model/EmailModel');
module.exports = function (app) {
    app.post('/send-email', function (req, res) {    //  Not Controller
        Task_Email.sendemail(req.body, function (err, task) {
            console.log('controller')
            if (err)
                res.send(err);

            res.send(task);
        });
    })
    app.post('/send/insertVerifyData', function (req, res) {    //  Not Controller
        Task_Email.insertVerifyData(req.body, function (err, task) {
            console.log('controller')
            if (err)
                res.send(err);

            res.send(task);
        });
    })
    app.post('/send/checkVerifyCode', function (req, res) {    //  Not Controller
        Task_Email.checkVerifyCode(req.body, function (err, task) {
            console.log('controller')
            if (err)
                res.send(err);

            res.send(task);
        });
    })
    app.post('/send/renewPassword', function (req, res) {    //  Not Controller
        Task_Email.renewPassword(req.body, function (err, task) {
            console.log('controller')
            if (err)
                res.send(err);

            res.send(task);
        });
    })
};