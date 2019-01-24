$(document).ready(function(){
	$(".container").fadeIn();
});

function myFunction() {
	$("p").fadeOut(function(){
		var x = document.getElementById("input").value;
		x = x*1.177;
		x = x.toFixed(2);
		document.getElementById("output").innerHTML = "$" + x;
		$("p").fadeIn();
	});
}
