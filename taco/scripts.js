 $(document).ready(function(){
 
  
 	$(".taliaRhino").hide();
 
 $( function() {

 
    $( "#taliaStanding" ).draggable({ axis: "x", containment: "#containment-wrapper2", scroll: false  });
    $( "#taliaRhino" ).draggable({ axis: "x", containment: "#containment-wrapper1", scroll: false   });
    
    $( "#draggableRhino" ).draggable();
    $( "#taliaStanding" ).droppable({
		  drop: function(){
		  	console.log("Dropped");
			$(".taliaRhino").show();
			$("#draggableRhino").hide();
			$(".taliaStanding").hide();
		  }
    });
    $("#droppableTaco").droppable({
    	drop: function(){
    		alert("You win!");
    		window.location='http://www.google.com';
    	}
    });
    
    
  } );
  
  });