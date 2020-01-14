var sql = require('./BaseModel');
var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};
const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport("SMTP", {
    service: 'Gmail',
    auth: {
        user: 'tchayanonz@gmail.com', // your email
        pass: 'off12082540' // your email password
    }
});

Task.sendemail = function sendemail(data, result) {

    // setup email data with unicode symbols
    const mailOptions = {
        from: 'tchayanonz@gmail.com',              // sender
        to: data.email,              // list of receivers
        subject: 'รหัสยืนยันการตั้งรหัสผ่านใหม่',            // Mail subject
        html: '<b>สวัสดีคุณ' + data.student_name + '<br>รหัสยืนยันของคุณ คือ'
            + '<br> <center><font size="6" color="red">' + data.verify_code + '</font></center><br>'
            + 'โปรดนำรหัสการยืนยันนี้ กรอกในแอพพลิเคชันเพื่อดำเนินการเปลี่ยนรหัสผ่านต่อไป </b>' // HTML body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
};
Task.insertVerifyData = function insertVerifyData(data, result) {

    var str = "INSERT INTO `tb_verify`( "
        + "`verify_code`,"
        + " `verify_email`,"
        + " `student_id`,"
        + " `verify_status`"
        + ") VALUES ("
        + data.verify_code + ", '"
        + data.email + "' , '"
        + data.student_id + "' ,'"
        + "not use'"
        + " );"
    // console.log(str);

    sql.query(str, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Task.checkVerifyCode = function checkVerifyCode(data, result) {

    var str = "SELECT * FROM `tb_verify` WHERE `verify_code` ='" + data.verify_code + "' AND `student_id` ='" + data.student_id + "'"
    // console.log(str);

    sql.query(str, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};
Task.renewPassword = function renewPassword(data, result) {

    var str = " UPDATE `tb_student` SET "
        + " `student_password`='" + data.confirm_password + "'"
        + " WHERE `student_id`= '" + data.student_id + "';"

    str += " UPDATE `tb_verify` SET"
        + " `verify_status`= 'used'"
        + " WHERE `verify_code`='" + data.verify_code + "'"
        + " AND `student_id`='" + data.student_id + "';"
    // console.log(str);

    sql.query(str, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Task;