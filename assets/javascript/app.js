//Variables
$(document).ready(function () {
var questions = [
    {q: "What is Monica's biggest pet peeve?", 
     c: ["Leaving Messes", "Losing to Chandler", "Animals dressed as Humans", "Ross getting his way"], 
     a:2
    },
    {q: "According to Chandler, what phenomenon scares the bejeezus out of him?",
     c: ["Michael Flatley, Lord of the Dance!", "The Trappings of Intimacy", "The Pool Boy who Broke his Parents up", "Richard Burke- Monica's ex"],
     a:1
    },
    {q: "Monica and Ross had a grandmother who died. Chandler and Joey went to her funeral. Name that grandmother",
     c: ["Nana","Judy","Lily","Althea"],
     a:4
    },
    {q: "Every week, the TV Guide comes to Chandler and Joey's apartment. What name appears on the address label?",
     c: ["Miss Chancy Bang", "Miss Chandler Bing", "Miss Chaneel Bong","Miss Chanandler Bong"],
     a:4
    },
    {q: "What is the name of Chandler's father's Las Vegas all-male burlesque show?",
     c: ["It's Raining Men", "Viva Las Gaygas!", "Chipindeals", "Magic Mike Express"],
     a:2
    },
    {q: "What was Monica's nickname when she was a field hockey goalie?",
     c: ["The Big Gate","The Wall","Big Fat Goalie","The Bigger Goalie"],
     a:3
    },
    {q: "Rachel claims this is her favorite movie...",
     c: ["Dangerous Liaisons", "Taxi Driver", "Godfather", "Unbreakable"],
     a:1
    },
    {q: "Her actual Favorite movie is...",
     c: ["Space Jam","Ghost Busters","Police Academy","Weekend at Bernies"],
     a:4
    },
    {q: "In what part of her body did Monica get a pencil stuck at age 14?",
     c: ["Her Mouth", "Her Nose", "Her Ear", "Her Hand"],
     a:3
    },
    {q: "Monica categorizes her towls. How many categories are there?",
     c: ["5", "11", "8", "16"],
     a:2
    },
    {q: "What is Joey's favorite food?",
     c: ["pizza", "cake", "turkey","sandwiches"],
     a:4
    },
    {q: "Chandler was hold old when he first touched a girl's breast?",
     c: ["21","16","25","19"],
     a:4
    },
    {q: "Joey had an imaginary childhood friend. What was his name?",
     c: ["John", "Maurice", "Kenny", "Gunther"],
     a:2
    },
    {q: "And his Profession was?",
     c: ["Superhero", "Doctor", "Space Cowboy", "Firefighter"],
     a:3
    },
    {q: "What is Chandler Bing's Job?",
     c: ["Transponster", "Statistical Analysis and Data Reconfiguration", "Technical Analyst", "Stock Broker"],
     a:2
    }
]



//start of the game
var winCounter = 0;
var loseCounter = 0; 
var timer = 10;
var unansweredCounter = 0;
var intervalId;
var userGuess = "";
var running = false;
var qCount = questions.length;
var pick;
var index;
var newArray = [];
var holder = [];



//Functions
// Used to start the game
$("#start").on("click", function () {
    $("#start").hide();
    displayQuestion();
    startTimer();
    for (var i = 0; i < questions.length; i++) {
        holder.push(questions[i]);
    }
})

// Function to start timer
function startTimer() {
    if (!running) {
        intervalId = setInterval(decrement, 1000)
        running = true;
    }
}

function decrement() {
    $("#time-left").html("<h1>Time remaining: " + timer + "</h1>");
    timer--;

        //what happens if timer is at 0
        if (timer === 0) {
            unansweredCounter++;
            stop();
            $("#answer-choice").html("<p>You've been bamboozled! The correct answer is " + pick.c[pick.a] + "</p>");
        }
}
// Function to stop Timer
function stop() {
    running = false;
    clearInterval(intervalId);
}


//Function to Display Questions
function displayQuestion() {
    index = Math.floor(Math.random() * questions.length);
    pick = questions[index];

    $("#questions").html("<h2>" + pick.questions + "</h2>");
    for (var i = 0; i < pick.c.length; i++) {
        var userChoice = $("<div>");
        userChoice.addClass("answerchoice");
        userChoice.html(pick.c[i]);
        //assign an array position to check the answer
        userChoice.attr("data-guessvalue", i);
        $("#answer-choice").append(userChoice);
    }

}

//Click Function for answer selection
$(".answerchoice").on("click", function(){
    // grabs array from the user
    userGuess = parseInt($(this).attr("data-guessvalue"));

    //correct guesses vs non correct guesses
    if (userGuess === pick.a) {
        stop();
        winCounter++;
        userGuess = "";
        $("#answer-choice").html("<p>How You Doin? You got it right!</p>");
    } else {
        stop();
        loseCounter++;
    }
});

// Reset Button Function
$("#reset").on("click", function(){
    $("#answer-choice").empty();
    $("#questions").empty();
    $("#reset").hide();
    for (var i = 0; i < holder.length; i++) {
        Option.push(holder[i]);
    }

    startTimer();
    displayQuestion();





})









});




//Console logs


