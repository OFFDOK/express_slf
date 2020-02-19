var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getBookingDateBy = function getBookingDateBy() {
    return new Promise(function (resolve, reject) {
        var str = "SELECT * FROM `tb_define_booking` ORDER BY `define_booking_date_start` ASC";
        // console.log(str);
        
        sql.query(str, function (err, res) {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(res);
            }
        });
    })
};

Task.checkBookingDateBy = function checkBookingDateBy(data) {
    return new Promise(function (resolve, reject) {
        var str = "SELECT COUNT(ID) AS queue FROM `tb_booking` WHERE `booking_date` = '" + data.date + "'";
        // console.log(str);

        sql.query(str, function (err, res) {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(res);
            }
        });
    })
};
Task.CheckOrder = function CheckOrder(code, result) {
    ID = code.value
    var str = "SELECT * FROM `tb_booking` WHERE `ID` = '" + ID + "'";

    // console.log(str);

    sql.query(str, function (err, res) {
        if (err) {
            const require = {
                error: err,
                require: false
            }
            console.log("error: ", err);
            result(null, require);
        }
        else {
            const require = {
                res: res,
                require: true
            };
            result(null, require);
        }
    });
};
Task.getMinMaxBookingDateBy = function getMinMaxBookingDateBy(result) {
    var str = "SELECT MIN(`define_booking_date_start`) AS min_date, MAX(`define_booking_date_start`) AS max_date, MIN(`define_booking_time_end`)as min_time ,MAX(`define_booking_time_end`) as max_time FROM `tb_define_booking`";

    // console.log(str);

    sql.query(str, function (err, res) {
        if (err) {
            const require = {
                error: err,
                require: false
            }
            console.log("error: ", err);
            result(null, require);
        }
        else {
            const require = {
                res: res,
                require: true
            };
            result(null, require);
        }
    });
};
Task.ShowBookingTime = function ShowBookingTime(code, result) {

    var str = "SELECT  `define_booking_time_start`, `define_booking_time_end` FROM `tb_define_booking`"
        + " WHERE `define_booking_date_start` ='" + code.date + "'";

    // console.log(str);

    sql.query(str, function (err, res) {
        if (err) {
            const require = {
                error: err,
                require: false
            }
            console.log("error: ", err);
            result(null, require);
        }
        else {
            const require = {
                res: res,
                require: true
            };
            result(null, require);
        }
    });
};
Task.DeleteQueue = function DeleteQueue(code, result) {
    ID = code.ID
    date = code.date
    time = code.time

    var str = "DELETE FROM `tb_booking` WHERE `ID` ='" + ID + "' AND"
        + " `booking_date` = '" + date + "' AND `booking_time`= '" + time + "'";

    // console.log(str);

    sql.query(str, function (err, res) {
        if (err) {
            const require = {
                error: err,
                require: false
            }
            console.log("error: ", err);
            result(null, require);
        }
        else {
            const require = {
                res: res,
                require: true
            };
            result(null, require);
        }
    });
};

Task.checkQueueOrder = function checkQueueOrder(data) {
    return new Promise(function (resolve, reject) {
        // var ID = data.ID
        var date = data.date
        var time = data.time
        var str = "SELECT booking_order AS Queue FROM `tb_booking` WHERE booking_date ='" + date + "'"
            + " AND booking_time ='" + time + "'";
        // console.log(str);

        sql.query(str, function (err, res) {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(res);
            }
        });
    })
};

Task.insertQueue = function insertQueue(data) {
    return new Promise(function (resolve, reject) {
        var ID = data.ID
        var date = data.date
        var time = data.time
        var order = data.order

        var str = "INSERT INTO `tb_booking`(`ID`,"
            + " `booking_date`,"
            + " `booking_time`,"
            + " `booking_order`,"
            + " `booking_status` ) "
            + " VALUES ( '"
            + ID + "','"
            + date + "','"
            + time + "','"
            + order + "','"
            + 'รอคิว' + "'"
            + " ) ; ";


        // console.log(str);
        sql.query(str, function (err, res) {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(res);
            }
        });
    })
};
module.exports = Task;