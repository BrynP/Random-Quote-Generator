//A function for printing HTML out onto the page
function print(message, target) {
  document.getElementById(target).innerHTML = message;
}



//This will give you a random quote to display
function getRandomQuote() {
  var quote;
  //The point of using "makeRandom" is to put our
  //Randomisation code into a separate function
  //Incase we wish to change the randomisation logic.
  //This code will find a random quote and return it
  var random = makeRandom();
  for ( var i in quotes)
  if (i == random)
  {
    quote = quotes[i];
  }
  return quote;

}

//These two variables are used to record
//When a "random" (in the case, a random quote)
//Has already been called.
//The function will make sure the same number isn't
//Duplicated until all numbers have been called
//This will also get its data from the "quotes" class
//made in quotes.js
var random = [];
var num = quotes.length;
function makeRandom() {
    // To refill the array
    if (!random.length) {
        for (var i = 0; i < num; i++) {
            random.push(i);
        }
    }
    var index = Math.floor(Math.random() * random.length);
    var val = random[index];

    //To Remove any values from the array
    random.splice(index, 1);

    return val;
}



//This function is to print our quote to HTML
function PrintQuote() {
  //This will be the string that will be used
  //to create the HTML view
  var message = "";

  //Randomise the background colour whenver
  //this function is triggered
  var r = Math.floor((Math.random() * 106) + 150);
  var b = Math.floor((Math.random() * 106 + 150));
  var g = Math.floor((Math.random() * 106) + 150);
  var color = "rgb(" + r + ", " + g + ", " + b + ")";

  document.body.style.backgroundColor = color;


  //Let's get our random quote.
  //The function used will get its data
  //from quotes.js
  var quote = getRandomQuote();

  //This is to populate our HTML string with some HTML data
  //So we can display all of the information we've got from
  //Quote. As Quote is derived from the "quotes" class in quotes.js
  //We are printing information stored in there.

  //We want to print the quote and source to HTML
  print(quote.quote, "quote");
  print(quote.source, "source");



  //This is to add a list
  //Containing the citation, year and tag, if they exist.
  if (quote.citation != null) {
    message += "<li><strong>Citation:</strong> " + quote.citation + "</li>";
  }
  if (quote.year != null) {
    message += "<li><strong>Year:</strong> "+ quote.year + "</li>";
  }
  if (quote.tag != null) {
    message += "<li><strong>Category:</strong> "+ quote.tag + "</li>";
  }

  message += "</ul>";

  //Finally, print the HTML to the page
  print(message, "info");

}





//Let's print the quote whenever the page loads
PrintQuote();
//And then print the Quote every 30 seconds (30,000ms).
var intervalID = window.setInterval(PrintQuote, 30000);
