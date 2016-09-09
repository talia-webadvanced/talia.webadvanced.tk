 $(document).ready(function(){
 
 	$(".wings").hide();
 	
 	 $(".resources").click(function(){
 		$(this).css("background-image","url('images/resources-drawer.png')");
 		$(".wings").show();
 	});
 
 	$(".button").hide();
 
		function typeText(){	
			var str = "Let’s see if you got the hang of it now. . . .",
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

		$(".button").delay(3000).show(0);

		setTimeout(typeText, 1600);

		$(".button").click(function(){
			console.log("it worked");
			$(".modalContainer").hide();
		});
 
  
 	$(".rhinoWings").hide();
 
 $( function() {

 
    $( "#rhinoSombrero" ).draggable({ axis: "x", containment: "#containment-wrapper1", scroll: false  });
    $( "#rhinoWings" ).draggable({ containment: "#containment-wrapper1", scroll: false   });
    
    $( "#draggableWings" ).draggable();
    $( "#rhinoSombrero" ).droppable({
		  drop: function(){
		  	console.log("Dropped");
			$(".rhinoWings").show();
			$("#rhinoSombrero").hide();
			$("#draggableWings").hide();
			// $(".taliaStanding").hide();
		  }
    });
    $("#droppableTaco").droppable({
    	drop: function(){
    		window.location='5-manatee.html';
    	}
    });
    
    
  } );
  
  });