$(document).ready(function(){
  
  $("#new").on("click", function() {
    window.open( chrome.runtime.getURL('builder.html') )
  })
  
})