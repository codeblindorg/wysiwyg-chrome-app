$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$(document).ready(function(){
  
  
  
  $("#file-actions-add-project").on("click",function(){
    console.log( "Beep, Boop, making folders :P" )
  })
  
  
})