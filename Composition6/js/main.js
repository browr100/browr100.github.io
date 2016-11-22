$("body").css("background-color", "#e2e2e2");

var clicks = 0;

$("button").click(function(){ 
    clicks = clicks + 1;
    $("body").css("background-color", "#a07112");
    console.log(clicks);
});

var counter = 0;

for (var i = 0; i < 20; i++ ) {
    counter++;
    console.log(counter); 
    $("body").append("<div class='block18'></div>");
    $("body").append ("<img src= 'lair.png'></img>");
    $("body").append("<div class='block10'></div>");
    $("body").append("<div class='block19'></div>");
}

var counter = 0;

for (var i = 0; i <80; i++ ) {
    counter++;
    console.log(counter); 
    $("body").append("<div class='block19'></div>");
}


$(".block18"). each(function() {
    var opacity = Math.random();
    console.log(opacity);
    var sizeVal = (Math.floor(Math.random()*60) + 20) + "px";
    $(this).css("width", sizeVal).css("height", sizeVal);
    $(this).css("opacity", opacity);
    $(this).css("top",Math.floor(Math.random()*$(window).height()));
    $(this).css("left",Math.floor(Math.random()*$(window).width()));
    $(this).css("font-size",Math.floor(Math.random()*$(window).width()));
});


$(".block10").each(function() {
    counter++;
    console.log("found");
    $(this).html(counter);
});

$(".block10").click(function() {
    if($(this).hasClass("hi")) {
        $(this).removeClass("hi");
    } else {
        $(this).addClass("hi");
    }
});

$(".block10"). each(function() {
    var opacity = Math.random();
    console.log(opacity);
    var sizeVal = (Math.floor(Math.random()*60) + 20) + "px";
    $(this).css("width", sizeVal).css("height", sizeVal);
    $(this).css("opacity", opacity);
    $(this).css("top",Math.floor(Math.random()*$(window).height()));
    $(this).css("left",Math.floor(Math.random()*$(window).width()));
    $(this).css("font-size",Math.floor(Math.random()*$(window).width()));
});

