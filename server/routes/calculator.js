var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var obj = {};

app.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function(req, res){ //Step 5) Numbers data gets here and the function is run
 obj = req.body;                     //Step 6) obj (which will include the 3 things) is set to req.body
 // console.log(obj);
 // calculate(obj.firstNumber, obj.secondNumber, obj.operator);
 console.log(calculate(obj.firstNumber, obj.secondNumber, obj.operator));
 res.sendStatus(201);
});

router.get('/', function(req, res){
  var answer = calculate(obj.firstNumber, obj.secondNumber, obj.operator);
  res.send(answer);
});

// calulate(2, 4, "add");
// console.log(calulate(2, 4, "add"));

function calculate(num1, num2, operator){
  if (operator == "add"){
    return (parseInt(num1) + parseInt(num2));
  } else if (operator == "subtract"){
    return (parseInt(num1) - parseInt(num2));
  } else if (operator == "multiply"){
    return (parseInt(num1) * parseInt(num2));
  } else if(operator == "divide"){
    return (parseInt(num1) / parseInt(num2));
  }
}

module.exports = router;
