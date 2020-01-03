var Task_Booking = require('../model/BookingModel');
var queueController = require('../Controller/QueueController')
module.exports = function (app) {

    app.post('/booking/getBookingDateBy', function (req, res) {
        queueController.getBookingDateBy(function (err, task) {
            // console.log('controller')
            if (err)
                res.send(err);

            res.send(task);
        });
    })
    app.post('/booking/CheckOrder', function (req, res) {
        Task_Booking.CheckOrder(req.body, function (err, task) {
            if (err)
                res.send(err);

            res.send(task);
        });
    })
    app.post('/booking/ShowBookingTime', function (req, res) {
        Task_Booking.ShowBookingTime(req.body, function (err, task) {
            if (err)
                res.send(err);

            res.send(task);
        });
    })
    app.post('/booking/CheckAndInsertQueue', function (req, res) {
        queueController.CheckAndInsertQueue(req.body, function (err, task) {
            if (err)
                res.send(err);

            res.send(task);
        });
    })
    app.post('/booking/DeleteQueue', function (req, res) {
        Task_Booking.DeleteQueue(req.body, function (err, task) {
            if (err)
                res.send(err);

            res.send(task);
        });
    })
    app.post('/booking/getMinMaxBookingDateBy', function (req, res) {
        Task_Booking.getMinMaxBookingDateBy(function (err, task) {
            if (err)
                res.send(err);

            res.send(task);
        });
    })
}