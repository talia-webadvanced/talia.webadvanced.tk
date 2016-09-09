$(document).ready(function(){

var vid = document.getElementById("bgvid");
var pauseButton = document.getElementById("vidpause");

function vidFade() {
  vid.classList.add("stopfade");
}

// vid.addEventListener('ended', function()
// {
// // only functional if "loop" is removed 
// vid.pause();
// // to capture IE10
// vidFade();
// }); 


// pauseButton.addEventListener("click", function() {
//   vid.classList.toggle("stopfade");
//   if (vid.paused) {
//     vid.play();
//     pauseButton.innerHTML = "Pause";
//   } else {
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
//   }
// })

$(function() {
    $("#draggable" ).draggable();
  });
  
// $('select').change(function(){
//     var url = $(this).val();
//     $('#ok').click(function(){
//          window.location = url;
//     })
// });

$("#cancel").click(function(){
  $(".window").css("display", "none");
});

$('ul li').click(function(){
	
	$('ul li').css({"background-color": "white", "color":"black","border-style": "solid", "border-color": "white", "border-width": "1px"});
	
	$(this).css({"background-color": "#000080", "color": "white", "border-style": "dotted", "border-color": "yellow", "border-width": "1px"});


	var target = $(this).attr("data-url");
  	$('#ok').click(function(){
         window.location = target;
    })
});
    
    
});