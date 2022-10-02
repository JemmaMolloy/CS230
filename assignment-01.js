var under5 = false, over5 = false, num =0;
var changeHeight= [75,40,40,40,40,40];//array of orignal borderBaseWidth
var changeColourUnder5 = [ [""],["Grey"],["Grey","Green"],["Grey","Grey","Green","Green","Green"],["Grey","Grey","Grey","Green"],["Grey","Grey","Green","Green","Green","Green"],["Grey","Grey","Grey","Green","Green","Green","Green"]]; //array of colours for under5
var changeColourOver5= [[""],["Grey"],["Grey","Green"],["Grey","Grey","Green"],["Grey","Grey","Grey","Green"],["Grey","Grey","Grey","Green","Green","Green"],["Grey","Grey","Grey","Grey","Grey","Green","Green","Green"]]; //array of colours for over5

function date(today){
var todaydate = document.getElementById("today").valueAsDate;
if(todaydate == null){
	document.getElementById("date").innerHTML = "Invalid Date, Try again".fontcolor("Red").fontsize("2px");
}
else{
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "June","July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var year = todaydate.getUTCFullYear(); //UTC because GMT giving wrong date
  var day = todaydate.getUTCDate();
  var month = todaydate.getUTCMonth()+1;

  if(day<10){
  day = "0"+day;
  }
  if(month<10){
  month = "0"+month;
  }
  var d = day+"/"+month+"/"+year; //making string of date
  //checking if valid date; type = date did already do this but was not accepting years through typed input
  //so added another why to check ensuring it would allow user to input type full date if required
  //regex inspired from https://www.regextester.com/?fam=114662
  if(/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/.test(d)){

    document.getElementById("date").innerHTML ="[" + day + "-" + months[month-1]+ "-" + year + "]" + '<br><br>';
  }
  else{
  document.getElementById("date").innerHTML = "Invalid Date, Try again ".fontcolor("Red").fontsize("2px");
  }
}
document.getElementById("today").valueAsDate = null;
}
function swap(buttonName){ //switch between recommendated guidelines
  
  if(buttonName == 'Under5'){
 		//change backgroud colour
    document.getElementById("swap1").style.backgroundColor = "#bfbfbf";
    document.getElementById("swap2").style.backgroundColor = "#e7e7e7";
  	under5 = true;
    over5 = false
  }
  else{
  	//change backgroud colour
    document.getElementById("swap2").style.backgroundColor = "#bfbfbf";
    document.getElementById("swap1").style.backgroundColor = "#e7e7e7";
  	under5 = false;
    over5 = true;
  }
}
function increase(section) { 
  num = document.getElementById("count"+section).value;
  num++;
  //increase size
  document.getElementById("section"+section).style.borderBottomWidth = ++changeHeight[section-1] + 'px';
       
  document.getElementById("count"+section).value = num;
  
  changeColour(section, num);
}
function decrease(section) {
  num = document.getElementById("count"+section).value;
  if(num>0)
  {
  	num--;
  //decrease size
  document.getElementById("section"+section).style.borderBottomWidth = --changeHeight[section-1] + 'px';
  }
  document.getElementById("count"+section).value = num;
  
  changeColour(section, num);
}
function changeColour(section,num){
if(under5){
    if(changeColourUnder5[section][num]!=null){
    	document.getElementById("count"+section).style.backgroundColor = changeColourUnder5[section][num];
    }
    else{
    	document.getElementById("count"+section).style.backgroundColor = "Red";
    }
  }
  else if(over5){
    if(changeColourOver5[section][num]!=null){
    	document.getElementById("count"+section).style.backgroundColor = changeColourOver5[section][num];
    }
    else{
    	document.getElementById("count"+section).style.backgroundColor = "Red";
    }
	} 
}

