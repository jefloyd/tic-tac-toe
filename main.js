$(document).ready(function(){

var x= "x";
var o= "o";
var counter = 0

$( ".celldata" ).click(function(){

	if (counter % 2 == 0) { 
		$(this).html(x);
		counter++;
	}
   	else { 
   		$(this).html(o);
   		counter++;
    }
});














});

