$(document).ready(function(){
	$(".hov2").hover(function(){
	  $(this).animate({ margin: -10, width: "+=20", height: "+=20" });
	  }, function(){
	  $(this).animate({ margin: 0, width: "-=20", height: "-=20" });
	});
});

function display(clicked_id){
    $("#panel" + clicked_id).slideToggle("slow");
};

function spin(id){
   var icon = document.getElementById(id);
   
	if(icon.className == ("skills_gi spin")){
      icon.className = 'skills_gi spun';  
	} 
	else{
      icon.className = 'skills_gi spin';
	}
}

function displayNav() {
	var x = document.getElementById("nav");

  if (x.className === "navbar") {
    x.className += "resp";
	} else {
    x.className = "navbar";
  }
}