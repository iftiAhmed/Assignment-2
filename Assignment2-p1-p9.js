/* =================================================================================

ASSIGNMENT 2 - PART-1

===================================================================================*/

//  1.	Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use //  the alert method to display the result.
/*
var name = prompt("What is your name?");
alert("Your name has " + name.length + " characters.");
*/
//  2.	Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find //  the letter in the string based on the number they specify. Use the alert method to display the result.
/*
var name = window.prompt("What is your name?");
var letter = window.prompt("Enter the numeric value of the between 0 and" + length-1 + " to find the charcter.");
window.alert("Based upon your inquiry" + name + " the letter spacifed the number " + (name.charAt(letter));

// 3

Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second  prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name  concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.

*/
//var firstName = window.prompt("Please enter your first name?");
//var lastName = window.prompt("Enter your last name?");

//window.alert("Your name is: " + (firstName.concat(lastName)));

/*
4. Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.
*/
/*
var quote = "The quick brown fox jumps over the lazy dog";
window.alert(quote.indexOf("fox"));
*/
/*
5. Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.
*/

/*
var quote = "The quick brown fox jumps over the lazy fox";
window.alert(quote.lastIndexOf("fox"));
*/


/*
6. Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.
*/

/*
var quote = "The quick brown fox jumped ove the lazy dog";
var fullName = window.prompt("Enter your full name!");
window.alert(quote.replace("the lazy dog", fullName));
*/


/*
7. Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.
*/
/*

var quote = "The quick brown fox jumps over the lazy dog";
var enterWord = window.prompt("Enter the word!");
window.alert(enterWord.match(/quote/g));
*/

/*
8. Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
*/

// Sptilt() Method

/*
var old_string = "The quick brown fox jumps over the lazy dog";
var new_string = (old_string.slice(31, 43));
window.alert(new_string.toUpperCase());
*/

// substr() method

/*
var old_string = "The quick brown fox jumps over the lazy dog";
var new_string = (old_string.substr(31, 12));
window.alert(new_string.toUpperCase());
*/
/*
9. Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
*/

/*
var quote = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
var trimedQuote = (quote.trim());
window.alert(trimedQuote.toLowerCase());
*/

/*
10. Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.
*/

/*
var original_quote = "the quick brown fox jumps ove the lazy dog";
var new_quote =   (original_quote.charAt(0).toUpperCase() + original_quote.substring(1));
window.alert(new_quote);
*/

/* ====================================================================================

ASSIGNMENT 2 - PART 2

Part1 - Math and Math Functions

======================================================================================*/
/*

1. Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
*/

/*
var number = window.prompt("Enter the number, either positive or negative(-):");
window.alert(Math.abs(number));
*/


/*
2. Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.
*/

/*
var numberRound = window.prompt("Enter the float point number (decimal):");
window.alert(Math.round(numberRound));
*/

/*           
3. Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
*/

/*
var numberRound = window.prompt("Enter the floating point number:");
var store = numberRound;
window.alert(Math.round(store));
*/

/*
4. Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
*/

/*
var askNumbers = window.prompt("Enter 5 numbers separated with comma(,):");
var array = new Array(parseInt.askNumbers);
window.alert(Math.max(array[]));
*/

/*
5. Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window.
*/

/*
var Number = window.prompt("Enter the number: ");
window.alert("The square root of the number Entered is: " + (Math.sqrt(Number)));
*/

/* ====================================================================================

ASSIGNMENT 2 - PART 2

Part2 - Date and Date Functions

======================================================================================*/
/*
6. Create an application that gets the current date. Display that result within the console window.
*/

/*
var currentDate = new Date();
window.alert("Today\'s\ date is :" + (currentDate.getDate()));
*/

/*
7. Create an application that gets the number of days in a month. Display that result within the console window.
*/

/*
var monthDays = new Date();
window.alert("Current month contains " + (monthDays.getMonth()) + " days.");
*/


/*
8. Create an application that gets the month name from a particular date. Display that result within the console window.
*/

/*
var d = new Date();
var month = new Array();
 month[0] = "January";
 month[1] = "February";
 month[2] = "March";
 month[3] = "April";
 month[4] = "May";
 month[5] = "June";
 month[6] = "July";
 month[7] = "August";
 month[8] = "September";
 month[9] = "October";
 month[10] = "November";
 month[11] = "December";
var n = month[d.getMonth()];
window.alert(n);

*/

/*
9. Create an application that tests whether a date is a weekend. Display that result within the console window.
*/
/*
var isWeekend = (new Date().getDay() + 1) % 7 === 0;
window.console.log('Weekend is ' + isWeekend);
*/



/*
10. Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday. 
*/

/*
var stDate;
var now;
var DayOfWeek;

var assoc = new Array(7);
assoc[0] = "Sunday";
assoc[1] = "Monday";
assoc[2] = "Tuesday";
assoc[3] = "Wednesday";
assoc[4] = "Thursday";
assoc[5] = "Friday";
assoc[6] = "Saturday";
now = new Date();
stDate = now.getDay();
DayOfWeek = (assoc[stDate - 1]);
window.console.log('Yesterday day of the week was: ' + DayOfWeek + '!');
*/


/*
11. Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
*/

/*
var stDate;
var now;
var DayOfWeek;

var assoc = new Array(7);
assoc[0] = "Sunday";
assoc[1] = "Monday";
assoc[2] = "Tuesday";
assoc[3] = "Wednesday";
assoc[4] = "Thursday";
assoc[5] = "Friday";
assoc[6] = "Saturday";
now = new Date();
stDate = now.getDay();
DayOfWeek = (assoc.charAt([stDate]));
window.console.log('The letter of the day is ' + DayOfWeek + '!');

*/



/* ====================================================================================

ASSIGNMENT 2 - PART 2

Part3 - Conditional Logic and Looping Operations

======================================================================================*/
/*
12. Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.
*/

/*
var x = window.prompt("Enter value of first integer x : ");
var y = window.prompt("Enter value of second integer y : ");

if (x > y) {
    window.console.log("The value of first integer x is " + x + " and is greater.");
} else {
    window.console.log("The value of second integer y is " + y + " and is greater.");
}
*/


/*
13. Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 
*/

/*
var students = ["Ursula", "Paul"];
var marks = [ 80, 77, 88, 95];

if (marks[0] === students[0]) {
    window.console.log("Ursula" + marks[0]);
} else if (marks[1] === students[1]) {
    
    window.console.log("Paul" + marks[1]);
}
*/

/*
var studentsGrades = [["Ursula  ",80],["Paul    ",77],["Henry   ",88],["Tabitha ",95],["Lucy    ", 68]];
console.log(" Student\nName"  +  "     Marks")
for (var i = 0; i < studentsGrades.length; i++) {
	console.log(studentsGrades[i][0] + " " + studentsGrades[i][1]);
}

var index = 0;
switch(studentsGrades)
{
        
    case 'A':
        if(studentsGrades < 100){
            console.log(studentsGrades[index]);
        }
        break;
    case 'B' :
        if(studentsGrades < 90){
            console.log(studentsGrades[index+1]);
        }
        break;
}
*/


/*
    
Student Name
Marks
Ursula
80
Paul
77
Henry
88
Tabitha
95
Lucy
68

The grades are computed as follows:

Range
Grade
<60
F
<70
D
<80
C
<90
B
<100
A

14. Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.
*/


/*
var i;
for(i = 0; i < 15; i++){
    if((i % 2) == 0) {
  console.log("Even number  " + i);
} else {
    console.log("Odd number   " + i)
}
}
*/

/*
15. Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.
*/

/*
var i;
for (i = 0; i < 100; i++)
if( ((i % 3) == 0) && ((i % 5) == 0))
  console.log("FizzBuzz\n " + i);
*/
for(i=1;i<100;i++)console.log((x=(i%3?'':'Fizz')+(i%5?'':'Buzz'))?x:i);  // Fizz for multiples of 3 and Buzz for multiple of 5
 
var i;
for (i = 0; i < 100; i++)
if( ((i % 3) == 0) && ((i % 5) == 0))
  console.log("FizzBuzz\n " + i);



/* ====================================================================================

ASSIGNMENT 2 - PART 2

Part4 - The Hitchhiiker Guide to the Galaxy

======================================================================================*/
/*
In this game you will explore what you’ve learned so far about variables, prompts, alerts, strings, conditionals, and more to create a game similar to the Hitchhiker’s Guide to the Galaxy. To complete the game follow the steps outlined below:
==========================================================================================================================================*/


/*
1. Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.
*/
var askUser;
if (askUser === window.confirm("Are you ready to play your game? ")) {
    window.alert("Awsome, our hero is waiting!");
} else {
    window.alert("Too bad, we're going to play anyway because our hero desperately needs your help!");
}

/*

2. Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”*/

var alertMessage = window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");



//3. Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).”

var promptMessage = window.prompt("Which direction would you like to head (please enter forward, left, or right).”

/*                                  
4. Use a switch statement to check for the literal string values forward, left, and right. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”

*/

var directions;
switch(directions) {


        case "forward":
            alert("You walk about 100 yards and safely make your way out of the cave.");
            break;
        case "left":
            alert(“Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.”);
            break;
        case "right":
            alert(“You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.”);
            break;
            default:
            alert(““The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”);


}



5. Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”

var feedback = window.prompt.log("Enter your feedback to rate your game between 1 and 10: ");
if (feedback >= 6 && <= 10){
        alert("Thank you, we will continue to make improvements to the game!");
} else if(feedback == 1 && <= 5){
        alert("Whatever, you weren't very good at this gameanyway!");
}


6. Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.

var validNumber;

switch (validNumber){
 
    case "1":
        alert("1 is a valid number:" + isNaN(validNumber);
        break;
    
     case "2":
        alert("2 is a valid number:" + isNaN(validNumber);
        break;
    case "3":
        alert("3 is a valid number:" + isNaN(validNumber);
        break;
    case "4":
        alert("4 is a valid number:" + isNaN(validNumber);
        break;
    case "5":
        alert("5 is a valid number:" + isNaN(validNumber);
        break;
       
        default:
              ("The value is default" + validNumber);
}


/* =====================================================================================================================================

ASSIGNMENT 2 - PART 2

Part5 - The Coin flip Game


In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:

===========================================================================================================================================*/
/*
1. Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.

2. Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.

3. Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails.

4. If the result is heads and the user selects heads, display the following message within an alert: 
The flip was heads and you chose heads...you win!
    
5. If the result is heads and the user selects tails, display the following message within an alert: 
The flip was heads but you chose tails...you lose!

6. If the result is tails and the user selects heads, display the following message within an alert: 
The flip was tails but you chose heads...you lose!
7. If the result is tails and the user selects tails, display the following message within an alert: 
The flip was tails and you chose tails...you win!

=========================================================================================================================================*/

var coinFlip = Math.random();
var coin = Math.floor(coinFlip * 2); // Number to rounds down to nearest number

var choice = window.prompt("Heads or Tails:");

if(choice === "heads") {
    choice = 0
} else {
    choice = 1
}

if(coin === 0){
    console.log("The flip was heads and you chose heads...you win!");
} else {
    console.log("The flip was heads but you chose tails...you lose!")
}
console.log(coin);
    
if(coin === 1){
    console.log("The flip was tails but you chose heads...you lose!");
} else {
    console.log("The flip was tails and you chose tails...you win!")
}
console.log(coin);

    
8. Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.

ar coinFlip = Math.random();
var coin = Math.floor(coinFlip * 2); // Number to rounds down to nearest number

var choice = window.prompt("Heads or Tails:");

if(choice === "heads") {
    choice = True
} else {
    choice = False
}

    
if(coin === True){
    console.log("The flip was heads and you chose heads...you win!");
} else {
    console.log("The flip was heads but you chose tails...you lose!")
}
console.log(coin);
    
if(coin === False){
    console.log("The flip was tails but you chose heads...you lose!");
} else {
    console.log("The flip was tails and you chose tails...you win!")
}
console.log(coin);


/* ====================================================================================

ASSIGNMENT 2 - PART 2

Part6 - Coin Flip Game(Redux)

n this part of the assignment you will explore what you’ve learned so far about variables, for loops, conditionals, operators, math, and more to create a different version of the “coin flip game”. To complete the game follow the steps outlined below:
1. Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
2. Create a for loop that loops 10 times.
3. Within the for loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
4. Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 

======================================================================================*/
var coinFlip;
for(i = coinFlip.Math.random()).Math.floor(coinFlip); i < coinFlip.length; i++){
    if(i = 0){
        console.log("Heads")
    } else {
        console("Tails")
    }
    
}


/* ====================================================================================

ASSIGNMENT 2 - PART 2

Part7 - The Coin Flip Streak Game

In this part of the assignment you will explore what you’ve learned so far about variables, do while loops, conditionals, operators, math, and more to create a “coin flip streak game”. The point of this simple game is to see what kind of streak you can get to (how many times “Heads” comes up in a row before “Tails” does to end the game). To complete the game follow the steps outlined below:
1. Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
2. Create a do while loop.
3. Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
4. Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 
5. Set the condition of the do while loop to end once the coinFlip becomes “Tails”.

======================================================================================*/

var coinFlip;
do {
    i = coinFlip.Math.random().Math.floor(coinFlip); 
    i++;
    {
    while (i < coinFlip.length);
           
    if(i = 0){
        console.log("Heads")
    } else {
        console("Tails")
    }
    
}


/* ====================================================================================

ASSIGNMENT 2 - PART 2

Part8 - Looping a Triangle

Write a loop that displays the following triangle within a console window:
#
##
###
####
#####
######
#######

======================================================================================*/

for (int i = 0; i <= 6; i++)
{
    for (int j = 0; j < i; j++)
    {
        console.log("#");
    }
    console.log();
} 
    
/* ====================================================================================

ASSIGNMENT 2 - PART 2

Part9 - Odd or Even

Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 
Sample Output:
"0 is even" 
"1 is odd" 
"2 is even"

======================================================================================*/


    for(var i = 0; i<=15; i++){
        if(i % 2 == 0){
            console.log(i + "\" is even\"")
        }else{
            console.log(i + "\"  is odd\"")
    }


