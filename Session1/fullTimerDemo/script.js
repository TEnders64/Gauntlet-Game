// DOM - Document Object Model

console.dir(document);

document.title = "Coffee";

// document.getElementsByTagName("h1")[0].innerText = "Hello Javascript";

console.log($);

$("h1").text("Hello Javascript");

$("#target").click(function(){
    
    $("p").css("background","linear-gradient(red, orange, yellow, green, blue, indigo, violet)");
    $("#target").hide(10000);
})

$("p").hover(function(){ alert("hovered in") }, function(){ alert("hovered out") })


