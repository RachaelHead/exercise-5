/*
Write a function that buids an HTML table with the data below. The table should have four columns:
first name, last name, position, and year. If the player is a Senior, her information should be in bold.
*/

var players = [
  {
    first:'Angela',
    last: 'Smith',
    position: 'Guard',
    year: 'Junior'
  },
    {
    first:'Ashley',
    last: 'Roberts',
    position: 'Guard',
    year: 'Senior'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    year: 'Freshman'
  },
   {
    first:'Catherine',
    last: 'McAllister',
    position: 'Forward',
    year: 'Senior'
  },
   {
    first:'Haley',
    last: 'Bishop',
    position: 'Center',
    year: 'Sophomore'
  },
  {
   first:'Renee',
   last: 'Williams',
   position: 'Guard',
   year: 'Senior'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  year: 'Junior'
  }
];

//Variables
//initialize a variable for the HTML content your going to build
var html ='';
//get the empty table content area
var tableContent = document.getElementById('table-content');

//Write your function here
function buildTable(){
  //start with the table header
  html += '<tr><th>First</th><th>Last</th><th>Position</th><th>Year</th></tr>';

  /*Now write a for loop to populate the table using the data
  /include logic to make the text bold when the player is a senior.
  Write the loop here*/

  for (i=0; i< players.length; i++){
    var row= document.createElement("tr");
    for( var j = 0; j< 1; j++ ){
       html += '<td>' + players[i].first +'</td><td>' + players[i].last +'</td><td>'
         + players[i].position +'</td><td>' + players[i].year+'</td>';

      if (players[i].year == 'Senior'){
           row += '<b>' + html + '</b>';
         };
    }
    html += '</tr>';
  }
  /*Now, outside of the for loop, but still inside the entire buildTable function,
  use the tableContent and html variables to display the results in the empty tableArea */
tableContent.innerHTML = html;
}

  buildTable();


var msg = '';
var messageArea = document.getElementById('message-area');

function allStarMessage(){
  msg += "Congratulations to Springfield's 2018 North Carolina All-State honorees: ____."
  for (i=0; i< allStars.length; i++){
    if (allStars[i].school == 'Springfield High School'){
      console.log(allStars[i].first + ' ' + allStars[i].last)
    }
  }
  messageArea.innerHTML = msg;
}

/*
EXTRA CREDIT CHALLENGE (5 POINTS): Write a function that compares the list above with the list below, finds the players that made the All-State team, and displays a message with the results: "Congratulations to Springfield's 2018 North Carolina All-State honorees: ____." Display the message in a div below the table.
Hint: You need two loops, one of which will be 'nested'.
var allStars = [
  {
    first:'Melanie',
    last: 'Akers',
    position: 'Forward',
    school:'Johnson High School'
  },
    {
    first:'Olivia',
    last: 'Carter',
    position: 'Foward',
    school:'Providence Day School'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    school:' Springfield High School'
  },
   {
    first:'Ursula',
    last: 'Jones',
    position: 'Guard',
    school: 'Chatham Senior High School'
  },
   {
    first:'Theresa',
    last: 'Hollinger',
    position: 'Guard',
    school: 'St. Joseph Academy'
  },
  {
   first:'Darleen',
   last: 'Lawrence',
   position: 'Guard',
   school: 'Everton High School'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  school: 'Springfield High School'
  }
];*/
