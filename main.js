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

    
    if($('#1').html() == x && $('#2').html() == x && $('#3').html() == x){
    	alert("you win");
    }
     if($('#4').html() == x && $('#5').html() == x && $('#6').html() == x){
    	alert("you win");
    }
    if($('#7').html() == x && $('#8').html() == x && $('#9').html() == x){
    	alert("you win");
    }

  






  
});


  //need to make if/then statement for all rows/columns to check if 123=x alert WIN etc...
    /* if("#1").innerHTML == x && ("#2").innerHTML == x && ("3").innerHTML == x;
    if("#4" == x && "#5" == x && "6" == x);
    if("#7" == x && "#8" == x && "9" == x);
    	alert("You Win!")  */

	//need to make if/then statement for all rows/columns to check if 123=x alert WIN etc...



$('button').click(function() {
    location.reload();


});













});

