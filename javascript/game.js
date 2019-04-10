$( document ).ready(function() {
    
    var adder;
    var losses = 0;
    var wins = 0;
    var yourScore = 0;

    var randNum = Math.floor((Math.random()* 100) + 15);
    var aqua = Math.floor((Math.random()* 12) + 1);
    var red = Math.floor((Math.random()* 12) + 1);
    var yellow = Math.floor((Math.random()* 12) + 1);
    var green = Math.floor((Math.random()* 12) + 1);

    $('.cpuNumber').append(randNum);
    $('.scorep').append(yourScore);






    var adder = function (){
        $('.scorep').empty();
        $('.scorep').append("Your Total:" + yourScore);
        $('.wins').empty();
        $('.wins').append(wins);
        $('.losses').empty();
        $('.losses').append(losses);
    }




    var game = function (){
        if (yourScore === randNum) {
            wins =wins + 1;
            
            restart();

        }else if(yourScore > randNum){
            losses =losses + 1;           
            
            restart();

        }else{
            adder();
        }
    }







    var restart = function(){
        yourScore = 0;
        randNum = Math.floor((Math.random()* 100) + 15);
    
        $('.cpuNumber').empty();
        $('.cpuNumber').append(randNum);
    
        aqua = Math.floor((Math.random()* 12) + 1);
        red = Math.floor((Math.random()* 12) + 1);
        yellow = Math.floor((Math.random()* 12) + 1);
        green = Math.floor((Math.random()* 12) + 1);
        adder();
    }










    $('.aqua').click(function(){
		yourScore = yourScore + aqua;
		game();
	})
	$('.red').click(function(){
		yourScore = yourScore + red;
		game();
	})
	$('.yellow').click(function(){
		yourScore = yourScore + yellow;
		game();
	})
	$('.green').click(function(){
		yourScore = yourScore + green;
		game();
	})





































//    function generate() {
//         $('.cpuNumber').text(Math.floor(Math.random() * 112) + 1);
//       }
//       generate();


//       for (var i = 0; i < 4; i++){

//         var crystalVal = (Math.floor(Math.random() * 12) + 1);
        
//         var crystal = $('.aqua-stone');
//             crystal.attr({"data": crystalVal});
//       }
    

      






























});