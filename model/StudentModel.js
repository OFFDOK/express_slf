var sql = require('./BaseModel');

var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.getIntituteBy = function getIntituteBy(result) {

    var str = "SELECT * FROM `tb_intitute`";
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

Task.checkLogin = function checkLogin(data, result) {

    var str = "SELECT  * FROM `tb_student` WHERE student_id = " + sql.escape(data.user_username) + ""
        + "AND student_password = " + sql.escape(data.user_password) + "";
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

Task.getSchoolOfByCode = function getSchoolOfByCode(data, result) {

    var str = "SELECT * FROM `tb_school_of` WHERE `intitute_id` = '" + data.code + "' "
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

Task.registerUser = function registerUser(data, result) {

    var str = "INSERT INTO `tb_student`( "
        + "`ID`,"
        + "`student_id`,"
        + " `student_password`,"
        + " `student_name`,"
        + " `student_intitute`,"
        + " `student_school_of`,"
        + " `student_email`,"
        + " `student_tel`) VALUES ('"
        + data.ID + "', '"
        + data.student_id + "', '"
        + data.student_password + "' , '"
        + data.student_name + "' ,'"
        + data.student_intitute + "','"
        + data.student_school_of + "','"
        + data.student_email + "','"
        + data.student_tel + "' "
        + " );"

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
Task.getStudentByCode = function getStudentByCode(data, result) {
    ID = data.ID
    student_id = data.student_id

    var str = "SELECT * FROM `tb_student` WHERE student_id ='" + student_id + "' AND ID = '" + ID + "'"
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