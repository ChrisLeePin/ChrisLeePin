$(document).ready(function(){
	$(".container").fadeIn();
});

var input;

function sum() {
	var x = eval(document.getElementById("display").textContent);
	x = x * 1.177;
	document.getElementById("display").textContent = x
	}

function add(x) {
	x = x.trim();
	if (input == "-" || input == "+" ||input == "*" ||input == "/"){
		if(x !== "-" && x !== "+" && input == "*" && input == "/"){
			document.getElementById("display").textContent += x;
			input = x;
		}
	}
	else{
		document.getElementById("display").textContent += x;
		input = x;
	}
}

function remove() {
	document.getElementById("display").textContent = "";
}
