const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
//A

var cors = require('cors');
app.use(cors());



app.locals.testVariable = 'Test Variable';
app.locals.testFunction = function () {
  return 'Test Function';
};

// SET Views

// set engine html
/* app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

/// set engine jade
/* app.set('views', __dirname + '/views');
app.set('view engine', 'jade'); */


/// set engine handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');




app.use((req, res, next) => {
  const origin = req.get('origin');
  // TODO Add origin validation
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');

  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
  } else {
    next();
  }
});

app.listen(3001, () => {
  console.log('API Start server at port 3001.')
})
//เรียกรูป มาแสดง  //http://localhost:3001/201966-audir8_2018_103.jpg

var publicDir = require('path').join(__dirname, './public');
console.log("publicDir", publicDir);
app.use(express.static(publicDir));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var appRoutesStudent = require('./routes/appRoutesStudent');
appRoutesStudent(app);
var appRoutesEmail = require('./routes/appRoutesEmail');
appRoutesEmail(app);
var appRoutesUploadApp = require('./routes/appRoutesUploadApp');
appRoutesUploadApp(app);
var appRouteDocument = require('./routes/appRouteDocument');
appRouteDocument(app);
var appRouteBooking = require('./routes/appRouteBooking');
appRouteBooking(app);