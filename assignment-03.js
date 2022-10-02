var current = "%"; //for which grades to toggle to
var k = [];
var count;
var p; //interval in setup() which tursn cells containing "-" yellow and counts assignments not submitted
var d =7;
var h=10; //keep track of columns and rows
//extra credit
var selected = [false, false, false, false, false, false, false, false, false, false]; //if row selected
var selectedc = [false, false, false, false, false, false, false, false, false, false]; //if col selected

setup();

function setup() {
  //make each "-" yellow

  p = setInterval(() => {
  var table = document.getElementById("myTable");
    count = 0;
    for (i = 1; i <= 10; i++) {
      for (j = 2; j < d; j++) {
        var x = table.rows[i].cells[j].innerHTML;
        if (x == "-") {
          if (i % 2 != 0) {
            table.rows[i].cells[j].style.backgroundColor = '#ffff00';
          } else {
            table.rows[i].cells[j].style.backgroundColor = '#e6e600';
          }
          //have a count for each student
          count++;  
        } 
        else {
          if (i % 2 != 0) {
            table.rows[i].cells[j].style.backgroundColor = 'white';
          } else {
            table.rows[i].cells[j].style.backgroundColor = '#dddddd';
          }
        }
      }
    }
    //display count
    document.getElementById("counter").innerHTML = count;
  }, 500);

}

function check(r, c) {
  //check if value entered is legitimate
  //get new average
  var table = document.getElementById("myTable");
  var old = table.rows[r].cells[c-1].innerHTML;
  
  setTimeout(() => {
    var q = setInterval(() => {
    table = document.getElementById("myTable");
    var t = table.rows[r].cells[c-1].innerHTML;
      
      if (t != old) {
        clearInterval(q);
        if (t >= 0 && t <= 100) {
          average(r);
          table.rows[r].cells[c-1].style.textAlign = 'right';
          if (r % 2 != 0) {
            table.rows[r].cells[c-1].style.backgroundColor = 'white';
          } else {
            table.rows[r].cells[c-1].style.backgroundColor = '#dddddd';
          }
        } else {
          table.rows[r].cells[c-1].innerHTML = "-";
          average(r);
          table.rows[r].cells[c-1].style.textAlign = 'center';
          if (r % 2 != 0) {
            table.rows[r].cells[c-1].style.backgroundColor = '#ffff00';
          } else {
            table.rows[r].cells[c-1].style.backgroundColor = '#e6e600';
          }

          //alert("Invalid Entry")
        }
        old = t;
      }

    }, 500);
  }, 2000)

}

function average(n) { //finding average
var table = document.getElementById("myTable");
  var sum = 0;
  var a1 = table.rows[n].cells[2].innerHTML;
  if (a1 == "-") {
    a1 = 0;
  } else {
    a1 = parseInt(a1);
  }
  var a2 = table.rows[n].cells[3].innerHTML;
  if (a2 == "-") {
    a2 = 0;
  } else {
    a2 = parseInt(a2);
  }
  var a3 = table.rows[n].cells[4].innerHTML;
  if (a3 == "-") {
    a3 = 0;
  } else {
    a3 = parseInt(a3);
  }
  var a4 = table.rows[n].cells[5].innerHTML;
  if (a4 == "-") {
    a4 = 0;
  } else {
    a4 = parseInt(a4);
  }
  var a5 = table.rows[n].cells[6].innerHTML;
  if (a5 == "-") {
    a5 = 0;
  } else {
    a5 = parseInt(a5);
  }

  sum = a1 + a2 + a3 + a4 + a5;
  sum = sum / (d-2);
  sum = Math.round(sum);
  table.rows[n].cells[d].innerHTML = sum;
  if (sum < 60) {
    if (n % 2 != 0) {
      table.rows[n].cells[7].style.backgroundColor = '#ff0000';
    } else {
      table.rows[n].cells[7].style.backgroundColor = '#e60000';
    }
    var s = table.rows[n].cells[7].innerHTML;
    table.rows[n].cells[7].innerHTML = s.fontcolor('white');
  } 
  else{
    if (n % 2 != 0) {
      table.rows[n].cells[7].style.backgroundColor = 'white';
    } else {
      table.rows[n].cells[7].style.backgroundColor = '#dddddd';
    }

    var s = table.rows[n].cells[7].innerHTML;
    dtable.rows[n].cells[7].innerHTML = s.fontcolor('black');
  }

}

function toggle() { //toggle between grade types
	var table = document.getElementById("myTable");
  if (current == "%") {
    current = "Letter";
    //change to letter
    document.getElementById("average").innerHTML = "Average[Letter]";
    for (i = 0; i < 10; i++) {
      k[i] = table.rows[i].cells[d].innerHTML;
      var x = changeToLetter(i, d);
      table.rows[i].cells[d].innerHTML = x;

    }

  } else if (current == "Letter") {
    current = "4.0"
    //change to 4.0;
    document.getElementById("average").innerHTML = "Average[4.0]";
    for (i = 0; i < 10; i++) {
      var x = changeTo4Point0(i, d);
      table.rows[i].cells[d].innerHTML = x;
    }

  } else {
    current = "%"
    //change to %
    document.getElementById("average").innerHTML = "Average[%]";
    for (i = 0; i < 10; i++) {
      table.rows[i].cells[d].innerHTML = k[i];
    }

  }
}

function changeToLetter(i, j) {
  var table = document.getElementById("myTable");
  var x = table.rows[i].cells[j].innerHTML;
  x = parseInt(x);
  if (x >= 93 && x >= 100) {
    return "A";
  } else if (x >= 90 && x < 93) {
    return "A-";
  } else if (x >= 87 && x < 90) {
    return "B+";
  } else if (x >= 83 && x < 87) {
    return "B";
  } else if (x >= 80 && x < 83) {
    return "B-";
  } else if (x >= 77 && x < 80) {
    return "C+";
  } else if (x >= 73 && x < 77) {
    return "C";
  } else if (x >= 70 && x < 73) {
    return "C-";
  } else if (x >= 67 && x < 70) {
    return "D+";
  } else if (x >= 63 && x < 67) {
    return "D";
  } else if (x >= 60 && x < 63) {
    return "D-";
  } else {
    return "F";
  }
}

function changeTo4Point0(i, j) {
	var table = document.getElementById("myTable");
  var x = table.rows[i].cells[j].innerHTML;
  if (x == "A") {
    return "4.0";
  } else if (x == "A-") {
    return "3.7";
  } else if (x == "B+") {
    return "3.3";
  } else if (x == "B") {
    return "3.0";
  } else if (x == "B-") {
    return "2.7";
  } else if (x == "C+") {
    return "2.3";
  } else if (x == "C") {
    return "2.0";
  } else if (x == "C-") {
    return "1.7";
  } else if (x == "D+") {
    return "1.3";
  } else if (x == "D") {
    return "1.0";
  } else if (x == "D-") {
    return "0.7";
  } else {
    return "0.0";
  }
}

function addRow() {
  //add new row
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  for (i = 0; i < 8; i++) {
    var x = row.insertCell(i);
    x.contentEditable = true;
  }
  h++;
}

function addCol() {
  //add new column
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;
  for (i = 0; i < rowCount; i++) {
    var row = table.rows[i];
    var x = row.insertCell(7);
    x.contentEditable = true;

  }
  var y = table.rows[0].cells[7];
  y.innerHTML = 'Add Title';
  
}

function addData(){
	//retrieves that data and fills it back to the table in the state that it previously held
    //make title in same
    clearInterval(p);
    var table = document.getElementById("myTable");
    var y = table.rows[0].cells[7];
    y.style.backgroundColor = '#999999';
    y.style.border = '1px solid #dddddd';
    y.style.rextAlign = 'left';
    y.style.padding = '8px';
    d++;
    //remove new rows
    for(i=11;i<h;i++){
    	table.rows.deleteRow(i);
    }
    for(i=1;i<=10;i++){
    	check(i,7);
    }
    setup();
}

function selectRow(n) {
  if (selected[n]) {
    deselectRow(n);
  } else {
    clearInterval(p);
    var table = document.getElementById("myTable");
    for (i = 0; i < table.rows[0].cells.length; i++) {
      var x = table.rows[n].cells[i];
      x.style.backgroundColor = '#ffeded';
    }
    selected[n] = true;
  }
}

function deselectRow(n) {
  var table = document.getElementById("myTable");

  for (i = 0; i < table.rows[0].cells.length; i++) {
    var x = table.rows[n].cells[i];
    if (n % 2 != 0) {
      x.style.backgroundColor = 'white';
    } else {
      x.style.backgroundColor = '#dddddd';
    }
  }
  selected[n] = false;
  setup();
}
function selectColumn(n){
	if (selectedc[n]) {
    deselectColumn(n);
  } else {
    clearInterval(p);
    var table = document.getElementById("myTable");
    for (i = 1; i < table.rows.length; i++) {
      var x = table.rows[i].cells[n];
      x.style.backgroundColor = '#ffeded';
    }
    selectedc[n] = true;
  }
}

function deselectColumn(n) {
  var table = document.getElementById("myTable");

  for (i = 1; i < table.rows.length; i++) {
    var x = table.rows[i].cells[n];
    if (i % 2 != 0) {
      x.style.backgroundColor = 'white';
    } else {
      x.style.backgroundColor = '#dddddd';
    }
  }
  selectedc[n] = false;
  setup();
}
