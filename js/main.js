// console.log ("up and runing");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function()
{if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
};
  
var flipCard = function(cardID){
	console.log ("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	// var cardOne = cards [0];
	// cardsInPlay.push(cardOne);
	// var cardTwo = cards [2];
	// cardsInPlay.push(cardTwo);
	
};
flipCard(0);
flipCard(2);
checkForMatch();