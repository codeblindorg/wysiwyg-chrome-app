$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$(document).ready(function(){
  
  $("#file-actions-add-folder").on("click",function(){
    console.log( "Beep, Boop, making folders :P" )
  })
  $("#file-actions-add-file").on("click",function(){
    console.log( "Beep, Boop, making files :P" )
  })
  
})