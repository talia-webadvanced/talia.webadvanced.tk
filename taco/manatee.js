 $(document).ready(function(){
 
 	$(".manatee").hide();
 
 	$(".resources").click(function(){
 		
 		$('html').css("background-position","right");
 		$('.rhinoWings').fadeOut();
 		$('.tacoFish').css("margin-left","-20%");
 		$(".manatee").show();
 		$(".manatee").css({"margin-right":"0","transition":"3s"});
 		
 	});
 
 
 	// $(".button").hide();
 
		function typeText(){	
			var str = "Something smells fishy. . . and by fishy I mean the delicious Fish Taco, the Taco Fish!<br>Try to catch him to piss off the stupid vegan queen.<br><br>Hint: Ask for help from Jedediah, the magical manatee who thinks he’s a narwhal.",
				i = 0,
				isTag,
				text;

			(function type() {
				text = str.slice(0, ++i);
				if (text === str) return;

				document.getElementById('typewriter').innerHTML = text;

				var char = text.slice(-1);
				if( char === '<' ) isTag = true;
				if( char === '>' ) isTag = false;

				if (isTag) return type();
				setTimeout(type, 30);

			}());	
		};

		$(".button").delay(8000).show(0);

		setTimeout(typeText, 1600);

		$(".button").click(function(){
			console.log("it worked");
			$(".modalContainer").hide();
		});

 
  
 	$(".taliaRhino").hide();
 
	 $( function() {

		$( "#rhinoWings" ).draggable({ axis: "x", containment: "#containment-wrapper2", scroll: false  });
		$( "#taliaRhino" ).draggable({ axis: "x", containment: "#containment-wrapper1", scroll: false   });
	
		$( "#draggableManatee" ).draggable();
		$( "#rhinoWings" ).droppable({
			  drop: function(){
				console.log("Dropped");
				$(".taliaRhino").show();
				$("#draggableRhino").hide();
				$(".rhinoWings").hide();
			  }
		});
		$("#droppableTaco").droppable({
			drop: function(){
				window.location='6-grammar.html';
			}
		});
	
	
	  });
  
  });