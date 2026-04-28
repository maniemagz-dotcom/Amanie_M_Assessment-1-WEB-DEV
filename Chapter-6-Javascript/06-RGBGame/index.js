var options = document.querySelectorAll(".option");
var color =  document.querySelector("#color");
var message =  document.querySelector("#message");
var h1 =  document.querySelector("h1");
var replay =  document.querySelector("#replay");

start();

function start() {
    color.textContent = pickedColor;
    setupOptions();
    replay();
}

replay.addEventListener("click", function() {
    replay();
});

function setupOptions() {
    for (var i = 0; i < options.length; i++) {
        options[i].style.backgroundColor = colors[i];
        
    }
}