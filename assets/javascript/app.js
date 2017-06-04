//============================================================================
// Name        : app.js
// Author      : Hai Nguyen
// Version     :
// Copyright   : 2017
// Description : This file contains javascript and jquery code to play the 
//               totally trivial trivia game.
// Pseudocode  :
//
//============================================================================
var number = 60;
var intervalId;
var clockRunning = false;
var testQuestions = 
[
    {
        question: "<p class='show-text'>What was the first full length CGI movie?</p>",
        choices: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"]
    },
    {
        question: "<p class='show-text'>Which of these is NOT a name of one of the Spice Girls?</p>",
        choices: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"]
    },
    {
        question: "<p class='show-text'>Which NBA team won the most titles in the 90s?</p>",
        choices: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"]
    },
    {
        question: "<p class='show-text'>Which group released the hit song, \"Smells Like Teen Spirit\"?</p>",
        choices: ["Nirvana", "Blackstreet Boys", "The Offspring", "No Doubt"]
    },
    {
        question: "<p class='show-text'>Which popular Disney movie featured the song, \"Circle of Life\"?</p>",
        choices: ["Aladdin", "Hercules", "Mulan", "The Lion King"]
    },
    {
        question: "<p class='show-text'>Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came ner the license plate said ...\"</p>",
        choices: ["Dice", "Mirror", "Fresh", "Cab"]
    },
    {
        question: "<p class='show-text'>Which was Dough's best friend's name?</p>",
        choices: ["Skeeter", "Mark", "Zach", "Cody"]
    },
    {
        question: "<p class='show-text'>What was the name of the principle at Bayside High in Saved By The Bell?</p>",
        choices: ["Mr. Zhou", "Mr. Driggers", "Mr. Belding", "Mr. Page"]
    }
];

function displayTest()
{       
    var len = testQuestions.length;
    var testStr = "<form action=''><fieldset>";
    for (var i = 0; i < len; i++)
    {
        var questionObj = testQuestions[i];
        testStr += questionObj["question"];
        for (var j = 0; j < questionObj["choices"].length; j++)
        {
            var eachChoice = questionObj["choices"][j];
            testStr += "<input type='radio' name='q" + (i+1) + "' id='q" + (i+1) + "' value='" + eachChoice + "' /><label>" + eachChoice + "</label>";
        }
        testStr += "<br><br><br>";
    }
    testStr += "<button type='button' id='submit-button' onclick='gradeTest()'>Submit</button>" +
               "</fieldset></form>";
    //Show testStr in the #show-test tag.
    $("#show-test").html(testStr);
}

function decrement()
{
    //Show the number in the #show-number tag.
    $("#show-number").html("<p class='show-text'><strong>Time Remaining: </strong>" + number + "</p><br><br>");

    number--;

    //the clockRunning flag allows the displayTest() function to run once.
    if (!clockRunning)
    {
        displayTest(testQuestions.length);
        clockRunning = true;
    }

    //  Once number hits zero...
    if (number === 0) 
    {
        //  ...run the stop function.
        stop();
        
        //grade test
        gradeTest(testQuestions.length);
    }
}

//The stop function
function stop() 
{
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}

//The run function sets an interval
//that runs the decrement function once a second.
function run() 
{
    intervalId = setInterval(decrement, 1000);
}

$(document).ready(function()
{
	//Check if Start button is clicked...
    $("#start-button").on("click", function() 
    {
        //remove Start button
        $("#show-button").remove();

    	//Execute the run function.
        run();
    });
});
