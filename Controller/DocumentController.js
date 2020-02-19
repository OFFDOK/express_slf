var documentmodel = require('../model/DocumentModel')
var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.CheckBeforeInsertDocument = async function CheckBeforeInsertDocument(code, result) {
    var date = code.date
    var detail_doc = code.detail_doc
    var name_doc = code.name_doc
    var link_doc = code.link_doc
    var semester = code.semester
    var status = code.status

    const check = await documentmodel.CheckOldDoc({ detail_doc, semester })
    // console.log(check[0].checkdoc);
    if (check[0].checkdoc) {
        const increaseolddoc = await documentmodel.increaseOldDocument({ detail_doc, name_doc, link_doc, date, semester,status })
        result(increaseolddoc);
    } else {
        const insertnewdoc = await documentmodel.insertNewDocument({ detail_doc, name_doc, link_doc, date, semester,status })
        result(insertnewdoc);
    }
};

module.exports = Task;