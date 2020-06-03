gamePattern = [];

userClickedPattern = [];

buttonColors = ['red', 'blue', 'green', 'yellow'];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
};

var green = new Audio("sounds/green.mp3");
var blue = new Audio("sounds/blue.mp3");
var yellow = new Audio("sounds/yellow.mp3");
var red = new Audio("sounds/red.mp3");

$(".green").on('click', function () {
    $(".green").fadeOut(50).fadeIn(100);
    green.play();
});

$(".blue").on('click', function () {
    $(".blue").fadeOut(50).fadeIn(100);
    blue.play();
});

$(".yellow").on('click', function () {
    $(".yellow").fadeOut(50).fadeIn(100);
    yellow.play();
});

$(".red").on('click', function () {
    $(".red").fadeOut(50).fadeIn(100);
    red.play();
});

$('.btn').on('click', function () {
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
});

function animatePress(currentColor) {
    $(this).classList.add('.pressed');
}

