$(document).ready(function(){

var x= "x";
var o= "o";
var counter = 0


$( ".celldata" ).click(function(){ //this line says that whenever a click is performed in class of celldata to run a function

	if (counter % 2 == 0) { //this ch
		$(this).html(x);
		counter++;
	}
   	else { 
   		$(this).html(o);
   		counter++;
    }
});

$('button').click(function() {
    location.reload();
});













});

