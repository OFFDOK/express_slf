var Task_Document = require('../model/DocumentModel');
var DocumentController = require('../Controller/DocumentController')
module.exports = function (app) {

    app.post('/document/insertDocument', function (req, res) {
        DocumentController.CheckBeforeInsertDocument(req.body, function (err, task) {
            //console.log('controller')
            if (err)
                res.send(err);

            res.send(task);
        });
    })
    app.post('/document/getDateOpenUploadDocument', function (req, res) {
        Task_Document.getDateOpenUploadDocument(function (err, task) {
            //console.log('controller')
            if (err)
                res.send(err);

            res.send(task);
        });
    })
    app.post('/document/getTypeOfDocumentByCode', function (req, res) {
        Task_Document.getTypeOfDocumentByCode(function (err, task) {
            //console.log('controller')
            if (err)
                res.send(err);

            res.send(task);
        });
    })
    app.post('/document/checkDocumentStatusByCode', function (req, res) {
        Task_Document.checkDocumentStatusByCode(req.body, function (err, task) {
            //console.log('controller')
            if (err)
                res.send(err);

            res.send(task);
        });
    })
    app.post('/document/checkDocumentStatusByCode', function (req, res) {
        Task_Document.checkDocumentStatusByCode(req.body, function (err, task) {
            //console.log('controller')
            if (err)
                res.send(err);

            res.send(task);
        });
    })
    app.post('/document/checkpersonupload', function (req, res) {
        Task_Document.checkpersonupload(req.body, function (err, task) {
            //console.log('controller')
            if (err)
                res.send(err);

            res.send(task);
        });
    })
    app.post('/document/getDocBycode', function (req, res) {
        Task_Document.getDocBycode(req.body, function (err, task) {
            //console.log('controller')
            if (err)
                res.send(err);

            res.send(task);
        });
    })
    app.post('/document/DeleteDocumentByCode', function (req, res) {
        Task_Document.DeleteDocumentByCode(req.body, function (err, task) {
            //console.log('controller')
            if (err)
                res.send(err);

            res.send(task);
        });
    })
    app.post('/document/DeleteUpload', function (req, res) {
        Task_Document.DeleteUpload(req.body, function (err, task) {
            //console.log('controller')
            if (err)
                res.send(err);

            res.send(task);
        });
    })
    app.post('/document/CheckremarkDoc', function (req, res) {
        Task_Document.CheckremarkDoc(req.body, function (err, task) {
            //console.log('controller')
            if (err)
                res.send(err);

            res.send(task);
        });
    })
}