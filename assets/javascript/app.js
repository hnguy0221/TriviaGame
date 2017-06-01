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
var number = 61;
var intervalId;
var clockRunning = false;

$(document).ready(function()
{
    function displayTest()
    {
        var question1 = "<p class='show-text'>What was the first full length CGI movie?</p>";
        var question2 = "<p class='show-text'>Which of these is NOT a name of one of the Spice Girls?</p>";
        var question3 = "<p class='show-text'>Which NBA team won the most titles in the 90s?</p>";
        var question4 = "<p class='show-text'>Which group released the hit song, \"Smells Like Teen Spirit\"?</p>";
        var question5 = "<p class='show-text'>Which popular Disney movie featured the song, \"Circle of Life\"?</p>";
        var question6 = "<p class='show-text'>Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came ner the license plate said ...\"</p>";
        var question7 = "<p class='show-text'>Which was Dough's best friend's name?</p>";
        var question8 = "<p class='show-text'>What was the name of the principle at Bayside High in Saved By The Bell?</p>";
        //Show test in the #show-test tag.
        var test = "<form action=''> " +
                   "<fieldset> " +
                   question1 +
                   "    <input type='radio' " +
                   "           name='q1' " +
                   "           id='q1' " +
                   "           value='A Bugs Life' /> " +
                   "    <label>A Bug\'s Life</label> " +
                   "    <input type='radio' " +
                   "           name='q1' " +
                   "           id='q1' " +
                   "           value='Monsters Inc' /> " +
                   "    <label>Monsters Inc.</label> " +
                   "    <input type='radio' " +
                   "           name='q1' " +
                   "           id='q1' " +
                   "           value='Toy Story' /> " +
                   "    <label>Toy Story</label> " +
                   "    <input type='radio' " +
                   "           name='q1' " +
                   "           id='q1' " +
                   "           value='The Lion King' /> " +
                   "    <label>The Lion King</label> " +
                   "    <br><br><br>" +
                   question2 +
                   "    <input type='radio' " +
                   "           name='q2' " +
                   "           id='q2' " +
                   "           value='Sporty Spice' /> " +
                   "    <label>Sporty Spice</label> " +
                   "    <input type='radio' " +
                   "           name='q2' " +
                   "           id='q2' " +
                   "           value='Fred Spice' /> " +
                   "    <label>Fred Spice</label> " +
                   "    <input type='radio' " +
                   "           name='q2' " +
                   "           id='q2' " +
                   "           value='Scary Spice' /> " +
                   "    <label>Scary Spice</label> " +
                   "    <input type='radio' " +
                   "           name='q2' " +
                   "           id='q2' " +
                   "           value='Posh Spice' /> " +
                   "    <label>Posh Spice</label> " +
                   "    <br><br><br> " +                 
                   question3 +
                   "    <input type='radio' " +
                   "           name='q3' " +
                   "           id='q3' " +
                   "           value='New York Knicks' /> " +
                   "    <label>New York Knicks</label> " +
                   "    <input type='radio' " +
                   "           name='q3' " +
                   "           id='q3' " +
                   "           value='Portland Trailblazers' /> " +
                   "    <label>Portland Trailblazers</label> " +
                   "    <input type='radio' " +
                   "           name='q3' " +
                   "           id='q3' " +
                   "           value='Los Angeles Lakers' /> " +
                   "    <label>Los Angleles Lakers</label> " +
                   "    <input type='radio' " +
                   "           name='q3' " +
                   "           id='q3' " +
                   "           value='Chicago Bulls' /> " +
                   "    <label>Chicago Bulls</label> " +
                   "    <br><br><br> " +
                   question4 +
                   "    <input type='radio' " +
                   "           name='q4' " +
                   "           id='q4' " +
                   "           value='Nirvana' /> " +
                   "    <label>Nirvana</label> " +
                   "    <input type='radio' " +
                   "           name='q4' " +
                   "           id='q4' " +
                   "           value='Blackstreet Boys' /> " +
                   "    <label>Blackstreet Boys</label> " +
                   "    <input type='radio' " +
                   "           name='q4' " +
                   "           id='q4' " +
                   "           value='The Offspring' /> " +
                   "    <label>The Offspring</label> " +
                   "    <input type='radio' " +
                   "           name='q4' " +
                   "           id='q4 " +
                   "           value='No Doubt' /> " +
                   "    <label>No Doubt</label> " +
                   "    <br><br><br> " +
                   question5 +
                   "    <input type='radio' " +
                   "           name='q5' " +
                   "           id='q5' " +
                   "           value='Aladdin' /> " +
                   "    <label>Aladdin</label> " +
                   "    <input type='radio' " +
                   "           name='q5' " +
                   "           id='q5' " +
                   "           value='Hercules' /> " +
                   "    <label>Hercules</label> " +
                   "    <input type='radio' " +
                   "           name='q5' " +
                   "           id='q5' " +
                   "           value='Mulan' /> " +
                   "    <label>Mulan</label> " +
                   "    <input type='radio' " +
                   "           name='q5' " +
                   "           id='q5' " +
                   "           value='The Lion King' /> " +
                   "    <label>The Lion King</label> " +
                   "    <br><br><br> " +
                   question6 +
                   "    <input type='radio' " +
                   "           name='q6' " +
                   "           id='q6' " +
                   "           value='Dice' /> " +
                   "    <label>Dice</label> " +
                   "    <input type='radio' " +
                   "           name='q6' " +
                   "           id='q6' " +
                   "           value='Mirror' /> " +
                   "    <label>Mirror</label> " +
                   "    <input type='radio' " +
                   "           name='q6' " +
                   "           id='q6' " +
                   "           value='Fresh' /> " +
                   "    <label>Fresh</label> " +
                   "    <input type='radio' " +
                   "           name='q6 " +
                   "           id='q6' " +
                   "           value='Cab' /> " +
                   "    <label>Cab</label> " +
                   "    <br><br><br> " +
                   question7 +
                   "    <input type='radio' " +
                   "           name='q7' " +
                   "           id='q7' " +
                   "           value='Skeeter' /> " +
                   "    <label>Skeeter</label> " +
                   "    <input type='radio' " +
                   "           name='q7' " +
                   "           id='q7' " +
                   "           value='Mark' /> " + 
                   "    <label>Mark</label> " +
                   "    <input type='radio' " +
                   "           name='q7' " +
                   "           id='q7' " +
                   "           value='Zach' /> " +
                   "    <label>Zach</label> " +
                   "    <input type='radio' " +
                   "           name='q7' " +
                   "           id='q7' " +
                   "           value='Cody' /> " +
                   "    <label>Cody</label> " +
                   "    <br><br><br> " +
                   question8 +
                   "    <input type='radio' " +
                   "           name='q8' " +
                   "           id='q8' " +
                   "           value='Mr Zhou' /> " +
                   "    <label>Mr. Zhou</label> " +
                   "    <input type='radio' " +
                   "           name='q8' " +
                   "           id='q8' " +
                   "           value='Mr Driggers' /> " +
                   "    <label>Mr. Driggers</label> " +
                   "    <input type='radio' " +
                   "           name='q8' " +
                   "           id='q8' " +
                   "           value='Mr Belding' /> " +
                   "    <label>Mr. Belding</label> " +
                   "    <input type='radio' " +
                   "           name='q8' " +
                   "           id='q8' " +
                   "           value='Mr Page' /> " +
                   "    <label>Mr. Page</label> " +
                   "    <br><br><br>" +
                   "    <button type='button' id='submit-button' onclick='gradeTest()'>Submit</button> " +
                   "</fieldset> " +
                   "</form>";
        $("#show-test").html(test);
        //$("#show-button-2").append("<button id='submit-button' type='button'>Submit</button>");
    }

    function decrement()
    {
        number--;

        //Show the number in the #show-number tag.
        $("#show-number").html("<p class='show-text'><strong>Time Remaining: </strong>" + number + "</p><br><br>");

        //the clockRunning flag allows the displayTest() function to run once.
        if (!clockRunning)
        {
            displayTest();
            clockRunning = true;
        }

        //  Once number hits zero...
        if (number === 0) 
        {
            //  ...run the stop function.
            stop();
            
            //grade test
            gradeTest();
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

	  //Check if Start button is clicked...
    $("#start-button").on("click", function() 
    {
        //remove Start button
        $("#show-button").remove();

    	  //Execute the run function.
        run();
    });
});
