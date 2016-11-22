$("body").css("background-color", "blue");

for (var i=0; i < 100; i++) {
$("body").append("<div class = 'dot'></div");
}

var opacity = 0;
var opacity = 1;

var cats = [img1 img2 img3]
$("body").append("<img src='" + cats[Math.floor(Math.random()*3)] + "'>" );

$(".dot"). each(function() {
    console.log(opacity);
    
    $(this).css("opacity", opacity/100);
    $(this).html(myCounter);
    $(this).css("height", myCounter +100);
    $(this).css("weight", myCounter +100);
    $(this).css("top",Math.floor(Math.random()*$(window).height()));
    $(this).css("left",Math.floor(Math.random()*$(window).width()));
    $(this).css("font-size",Math.floor(Math.random()*$(window).width()));
    myCounter++
    opacity++;
    
});

/* 
-css-
    .dot {
    height: 100%
    width: 100%
    background-color: red;
    border-radius: 100%
    margin: 20px;
    position: absolute;
}

img {
    position: absolute;
    top:0;
    left:0;
    z-index;
}

-inspect-
Math. Floor(4.9)
4
var my Array =
["red, "green", "blue"]
undefined
myArray[0]
"red"
myArray[1]



Math.Floor(Math.random()*100);
*0-99*






$("body").css("background-color", "blue");

for (var i=0; i < 100; i++) { 
$("body").append("<div class = 'block18'></div");
}

var opacity = 0;
var opacity = 1;

var sizeVal = (Math.floor(Math.random()*60) + 20) + "px";

$(".block18").css("width", sizeVal).css("height", sizeVal);


$(".block18"). each(function() {
    console.log(opacity);
    
    $(this).css("opacity", opacity/100);
    $(this).html(myCounter);
    $(this).css("height", myCounter +100);
    $(this).css("weight", myCounter +100);
    $(this).css("top",Math.floor(Math.random()*$(window).height()));
    $(this).css("left",Math.floor(Math.random()*$(window).width()));
    $(this).css("font-size",Math.floor(Math.random()*$(window).width()));
    myCounter++
    opacity++;
    
});

var clicked = false;

$("#toggle").click(function() {
    if (clicked == false) {
    console.log("hello world...");
        $("#status").html("GO");
        $("#status").css("background-color", "green");
        $("#taggle").html("Stop"); 
    clicked = true;
    
    } else {
        $("#status").html("STOP");
        $("#status").css("background-color", "red");
        $("#taggle").html("Start"); 
    clicked = false;
    }
});

for (var multiplier = 1; multiplier <= 10; multiplier++) {
   var result = multiplier * 6;
   console.log(result);
}