$(document).ready(function(){
//  console.log("test");

$('button').on('click', function(event){
event.preventDefault();
var numbers = {};
var fields = $('#calculator').serializeArray();  //Turns into an object
fields.forEach(function(element, index, array) {
    numbers[element.name] = element.value;

});
  numbers.operator = this.getAttribute("id");
  console.log(numbers);


 $.ajax({                      //Step 1) Ajax requests to send information to /calculator on the backend
   type: 'POST',
   url: '/calculator',
   data: numbers,              //Step 2) Object potato (defined above) is sent the app.js file
   success: function(){
     console.log("success");
   },
   error: function(error){
     console.log('The "/calculator" ajax post request failed with error: ', error);
   }
 });

 $.ajax({
   type: 'GET',
   url: '/calculator',
   success: function(data){
     console.log("success");
     $("#answer").text(data);
   },
   error: function(error){
     console.log('The "/calculator" ajax post request failed with error: ', error);
   }
});
});
});
