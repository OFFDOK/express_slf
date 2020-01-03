var bookingModel = require('../model/BookingModel')
moment = require('moment-timezone');
var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};
Task.CheckAndInsertQueue = async function CheckAndInsertQueue(data, result) {
    var ID = data.ID
    var date = data.date
    var time = data.time
    const check = await bookingModel.checkQueueOrder({ date, time })
    if (check) {
        // console.log(check[0].Queue);
        if (check[0].Queue == 0) {
            var order = 1
        }
        else {
            var order = check[0].Queue + 1
        }
        const insert = await bookingModel.insertQueue({ ID, date, time, order })
        if (insert) {
            result(insert)
        }
    }
};

Task.getBookingDateBy = async function getBookingDateBy(result) {
    var booking_date = [];
    const check = await bookingModel.getBookingDateBy()
    if (check) {
        for (let i = 0; i < check.length; i++) {
            var date = moment(check[i].define_booking_date_start).tz('Asia/Bangkok').format('YYYY-MM-DD');            
            const check_order = await bookingModel.checkBookingDateBy({ date })
            if (check_order) {
                var order_count = parseInt(check[i].maximum_queue) - parseInt(check_order[0].queue)
                if(order_count > 0){
                    booking_date.push(check[i])   
                }
            }
        }
        
        result(booking_date);
    }
};


module.exports = Task;