var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var calculator = require('./routes/calculator'); //Step 4) The potato data follows this route to calculator.js

app.use(bodyParser.urlencoded({ extended: true }));




app.use('/calculator', calculator); //Step 3) Ajax request looks for /calculator (var calculator) and finds it here

app.use('/', index);


app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
 console.log('server is listening on port ' + app.get('port'));
});
