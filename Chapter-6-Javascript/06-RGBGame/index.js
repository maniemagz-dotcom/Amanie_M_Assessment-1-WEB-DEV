// Global Variables 
var RGBDisplay  = document.getElementById("RGB-display");   // shows the RGB value to guess
var message     = document.getElementById("message");       // shows correct / incorrect feedback
var hearts = document.getElementById("hearts");        // shows remaining lives
var scoreDisplay = document.getElementById("score");        // shows current score
var replay   = document.getElementById("replay");        // play again button
var options     = document.querySelectorAll(".option");     // the three colour boxes

var hearts       = 3;    // player starts with 3 lives
var score       = 0;    // player starts with 0 score
var correctColor = "";  // sets the correct RGB colour for the current round

// Random generator number between 0 and 255 
function randomValue() {
    return Math.floor(Math.random() * 256);
}

// Random generate RGB colour 
function randomColor() {
    return "rgb(" + randomValue() + ", " + randomValue() + ", " + randomValue() + ")";
}

// New round 
function newRound() {
    correctColor = randomColor();  // Generate the correct colour
    RGBDisplay.textContent = correctColor; // Display the RGB value the user needs to match
    var correctIndex = Math.floor(Math.random() * options.length); // Random position for the correct colour 

    // Assign colours to each option 
    for (var i = 0; i < options.length; i++) {
        if (i === correctIndex) {
            // when correct colour
            options[i].style.backgroundColor = correctColor;
        } else {
            // when wrong colour
            options[i].style.backgroundColor = randomColor();
        }
        options[i].style.opacity = "1";
        options[i].style.cursor = "pointer";
        options[i].style.pointerEvents = "auto";
    }

    // Feedback message at the start of each round
    message.textContent = "";
    message.className = "";
}

// When user clicks a colour option 
function handleClick() {
    if (this.style.backgroundColor === correctColor) { // Check if the clicked box's colour matches the correct colour
        score++;
        scoreDisplay.textContent = "Score: " + score;
        message.textContent = "Correct!";
        message.className = "correct";

        // Disable all boxes so they can't click again this round
        disableOptions();

        // Move to next round after a short delay
        setTimeout(function() {
            newRound();
        }, 1000);

    } else { // WRONG GUESS 
        hearts--;
        hearts.textContent = "Lives: " + lives;
        message.textContent = "Wrong! Try again.";
        message.className = "wrong";

        // Fade out the wrong box so the player knows not to click it again
        this.style.opacity = "0.3";
        this.style.cursor = "default";
        this.style.pointerEvents = "none";

        // Check if the player has run out of lives
        if (hearts === 0) {
            endGame();
        }
    }
}

// Disable all option boxes 
function disableOptions() {
    for (var i = 0; i < options.length; i++) {
        options[i].style.pointerEvents = "none";
        options[i].style.cursor = "default";
    }
}

// End game when lives reach 0 
function endGame() {
    // Show final score message
    message.textContent = "Game Over! Final Score: " + score;
    message.className = "gameover";

    rgbDisplay.textContent = "Game Over"; // Update the RGB display to signal game over

    disableOptions();// Disable all option boxes

    replay.style.display = "inline-block"; // Show the replay button
}

// Restart the game 
function resetGame() {
    // Reset game variables
    hearts = 3;
    score = 0;

    // Update the displays
    hearts.textContent = "❤️ Lives: " + lives;
    scoreDisplay.textContent = "Score: " + score;

    replay.style.display = "none"; // Hide the replay button again
    newRound(); // Start a fresh round
}

// Attach click listeners to each colour option box 
for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", handleClick);
}

//  Attach click listener to the replay button 
replay.addEventListener("click", resetGame);

replay.style.display = "none"; // hide replay button initially and start the first round 
newRound();
