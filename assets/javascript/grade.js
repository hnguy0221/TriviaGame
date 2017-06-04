//============================================================================
// Name        : grade.js
// Author      : Hai Nguyen
// Version     :
// Copyright   : 2017
// Description : This file contains javascript and jquery code to calculate 
//               the correct and incorrect answers and the questions that are
//               not answered. Note that the gradeTest() function is called 
//               when the user clicks on the submit button or when time has
//               elapsed.
// Pseudocode  :
//
//============================================================================
var corrects = 0;
var wrongs = 0;
var unanswers = 0;
var wrongFl = false;
var unanswerFl = false;
var correctFl = false;
var answers = ["Monsters Inc.", "Sporty Spice", "Chicago Bulls", 
    "Blackstreet Boys", "The Lion King", "Cab", "Mark", "Mr. Zhou"];

function calcChoices(choices, answer)
{
    for (var i = 0; i < choices.length; i++)
    {
        var currentChoice = choices[i];
        if (currentChoice.checked)
        {
            if (currentChoice.value === answer) 
            {
                console.log("Correct Answer!")
                correctFl = true;
                unanswerFl = false;
                wrongFl = false;
                break;
            }
            else
            {
                console.log("Wrong answer!");
                wrongFl = true;
                unanswerFl = false;
            }
        }
        else
        {
            console.log("Unselected!")
            unanswerFl = true;
        }
    }
   
    if (correctFl === true)
    {
        corrects++;
        correctFl = false; //reset
    }
    else if (wrongFl === true)
    {
       wrongs++;
       wrongFl = false; //reset
    }
    else if (unanswerFl === true)
    {
        unanswers++;
    }
}

function displayResults()
{
    $("#show-number").remove(); //remove the game counter div
    var tmpStr = "<p class='show-text'>All Done!</p>";
    $("#show-test").html(tmpStr);
    tmpStr = "<p class='show-text'>Correct Answers: " + corrects + "</p>";
    $("#show-test").append(tmpStr);
    tmpStr = "<p class='show-text'>Incorrect Answers: " + wrongs + "</p>";
    $("#show-test").append(tmpStr);
    tmpStr = "<p class='show-text'>Unanswered: " + unanswers + "</p>";
    $("#show-test").append(tmpStr);
}

function gradeTest()
{
    //calculate the correct and incorrect answers and questions
    //that are not answered.
    for (var i = 0; i < testQuestions.length; i++)
    {
        //get the multiple choices for each question
        var question = "q" + (i+1);
        var choices = document.getElementsByName(question);
        //calculate corrects, wrongs or unanswers
        calcChoices(choices, answers[i]);
    }
    //display the results
    displayResults();
}