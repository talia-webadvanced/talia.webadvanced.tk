$(document).ready(function(){
        $(".boxText").hide();
        $(".circleBox").mouseenter(function(){
                    $(this).css({"width": "150px", "height": "150px", "border-radius": "0"});
                    $(".boxText").show(550);
                    $(".questionMark").hide(550);
        }).mouseleave(function(){
                    $(this).css({"width": "19px", "height": "20px", "border-radius": "100px"});
                    $(".boxText").hide(0);
                    $(".questionMark").show(550);
        });
                  
});