const upload = require('../library/uploadMiddleware');
const Resize = require('../library/Resize');
const Config = require('../globals/Config');
const path = require('path');
const mkdirp = require('mkdirp')
const uuidv4 = require('uuid/v4');
const fs = require('fs');
const _config = new Config();
var multer = require('multer');
module.exports = function (app) {

    app.post('/upload-pdf', async function (req, res) {

        var filePathSub = '';
        var Storage = multer.diskStorage({

            destination: function (req, file, callback) {
                const userPath = 'student-document' + "/" + req.body.semester.replace("/", "-")
                const subPath = '../public/' + userPath;
                filePathSub = path.join(__dirname, subPath);
                //filePathSub = 'public_file/' + req.body.upload_url + '/' + userPath;
                mkdirp.sync(filePathSub)
                callback(null, filePathSub);

            },
            filename: function (req, file, callback) {
                console.log("file : ", req.body.pdfname);
                callback(null, req.body.pdfname);
            }


        });

        var upload = multer({
            storage: Storage
        }).single("PDF");

        upload(req, res, function (err) {
            // console.log("body = >", req.body);
            // console.log(">>>>>>", req.body.upload_url);

            console.log('req', req.file)
            if (!req.file) {
                const require = {
                    data: {
                        doc_url: ""
                    },
                    error: [{ message: 'Can not find Document upload.' }],
                    upload_result: false,
                    server_result: true
                };
                res.send(require);
            } else {
                const require = {
                    data: {
                        doc_url: 'student-document' + "/" + req.body.semester.replace("/", "-") + "/" + req.file.filename
                    },
                    error: [{ message: 'Upload Document complete.' }],
                    upload_result: true,
                    server_result: true
                };
                console.log('res', require);
                res.send(require);
            }
        });
    });
}