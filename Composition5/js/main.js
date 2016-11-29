$("body").css("background-color", "#9BA9AA");

var clicks = 0;

$("button").click(function(){
    clicks = clicks + 1;
    $("body").css("background-color", "#E86E00");
    console.log(clicks);
});

var counter = 0;

for (var i = 0; i < 50; i++ ) {
    counter++;
    console.log(counter); 
    $("body").append("<div class='block18'></div>");
    $("body").append ("<img src= 'hi.png'></img>");
}


$(".block18"). each(function() {
    var opacity = Math.random();
    var sizeVal = (Math.floor(Math.random()*60) + 20) + "px";
    $(this).css("width", sizeVal).css("height", sizeVal);
    $(this).css("opacity", opacity);
    $(this).css("top",Math.floor(Math.random()*$(window).height()));
    $(this).css("left",Math.floor(Math.random()*$(window).width()));
    $(this).css("font-size",Math.floor(Math.random()*$(window).width()));
});