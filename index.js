console.log('JS is loaded')
var button = $('button');
var fortune = $('p');



button.on("click", openCookie);

function openCookie() {
  console.log("you clicked the button!");
  var message = [
    "A great surprise is coming your way",
    "Help I'm trapped in a fortune cookie factory",
    "The fortune you seek is in another cookie",
    "A closed mouth gathers no feet",
    "A conclusion is simply the place where you got tired of thinking",
    "A cynic is only a frustrated optimist",
    "A foolish man listens to his heart, but a wise man listens to cookies",
    "If you look back, you'll soon be going that way",
    "You will live long enough to open many fortune cookies",
    "Yesterday's history, tomorrow's a mystery, today is a gift",
    "I am worth a fortune",
    "No snowflake feels responsible in an avalanche",
    "You will receive a fortune cookie",
    "Some fortune cookies contain no fortune",
    "Don't let statistics do a number on you",
    "You are not illiterate"];
  let num = Math.floor(Math.random() * 16);
  let yourFortune = message[num];

  console.log(fortune)
  fortune.text(function(n){
      return yourFortune
    });
}
