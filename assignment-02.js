var colours = ["red","green","yellow","blue"];
var position =1, flashcol, pressed ="blank",count;
var game = [], inter =0,attempt, countdown=5000;
function start(){
  //start the game
  //turn button green
	document.getElementById("dot").style.backgroundColor = "green";
  position =1;
  document.getElementById("score").value = "00";
  	play();
}
function play(){
	//get a randon position in our colours array
  var flashpos = Math.floor(Math.random() * 4);
  flashcol = colours[flashpos];
  game[position-1]=flashcol+"Circle";
  //gets how fast to flash buttons
   var time =2000;
   if(position>=5&&position<9){
   time = 1000;
   }
   if(position>=9&&position<13){
   time = 500;
   }
   if(position>=13){
   time = 250;
   }
   inter=0;
 	//flash each button in the game array
  for(i=0;i<position;i++){
  	inter+=time;
    if(i==0){	//if its the first colour flash after 3 seconds
    	flash(game[i],3000);
    }
    else{
      flash(game[i],inter);
      }
    }
    //attempt keeps track of gameOver
    attempt=0;
    //get input for button pressing check if current button oressed matches array
    //if doesnt match or takes longer than 5 secs to respond fail		
   setTimeout(function(){
    for(j=0;j<position;j++){
      count = 0; //number of correct answers
      countdown = 5000; //countdown for 5 secs
      pressed = "blank";
      //check if current button matches pressed button ot timer runs out
      check(j,countdown,game);
    }
   },inter);
    
  }
  function flash(colourCircle,inter){
  //jquery function inspired from https://www.w3resource.com/jquery-exercises/part1/jquery-practical-exercise-6.php
  	setTimeout(()=>{$("#"+colourCircle).fadeOut(100).fadeIn(100)},inter);
  }
	function whichPress(button){
  //which button is pressed
  //increase count on pressed buttons
  //flash the button
  		pressed = button;
      count++;
      //jquery function inspired from https://www.w3resource.com/jquery-exercises/part1/jquery-practical-exercise-6.php
  		$("#"+button).fadeOut(100).fadeIn(100);
  		
  }
  function gameOver(){
  		//play stops
     	//displays highscore if score is higher than highscore
      //flash all buttons 5 times
     	//have to press start to start again
      attempt++;
      for(i=0;i<=5;i++){
      	flash('redCircle',0);
        flash('blueCircle',0);
        flash('yellowCircle',0);
        flash('greenCircle',0);
      }
      //waiting for flashing to stop
      setTimeout(function(){
      var sc = document.getElementById("score").value;
    	var hs = document.getElementById("highscore").value;
      document.getElementById("dot").style.backgroundColor = "red";
        if(sc>hs){
        document.getElementById("highscore").value = sc;
        }
        //reset variables
        game=[];
        position=1;
        inter =0;
        return;
      },1500);
  }
  function win(){
  		var sc = document.getElementById("score").value;
      sc++;
      //increase and display score
      if(sc<9&&sc>0){
       document.getElementById("score").value = '0'+sc;
      }
      else{
        document.getElementById("score").value = sc;
      }
      //position increases
      position++;
      //play continues
      play();
  }
  function check(j,countdown,game){
  //wait 5 seconds for each button
  setTimeout(function(){
  //keep going every 1/2 second
  //to check if a button has been pressed
  //if it is the correct button
  //or if the timer runs out
  var a=setInterval(function(){
  console.log(game[j]);
        console.log(pressed);
        if(game[j]==pressed){
        //leave interval
        clearInterval(a);
          countdown = 5500;
            if(count==position){
              countdown = 5500;
              //call function to continue play
              win();
            }
            return;
        }
        else if(pressed!="blank"&&game[j]!=pressed){
        //leave interval
        	clearInterval(a);
          //attemp keeps track if the game has already finished
          if(attempt<1){
          	gameOver();
          }
          return;
        }
        else if(countdown<0){
        //leave interval
         	clearInterval(a);
          //if not button pressed or wrong button pressed
          if(attempt<1){
          	gameOver();
          }
          return;
        }
        countdown-=500;
        },500);
        
        },5000*j);
  }