var open = false;

function display(clicked_id){
    $("#panel" + clicked_id).slideToggle("slow");
};

function spin(){
  var icon = document.getElementById('s3');
  
  if(open){
      icon.className = 'skills_gi sk3';  
    } else{
      icon.className = 'skills_gi sk3 open';
}
    open = !open;
}