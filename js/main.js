// console.log ("up and runing");
var cards = [
{
	rank: "queen",
	suit: "hearts",
	image: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	image: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	image: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	image: "images/king-of-diamonds.png",
}

];
var cardsInPlay = [];

var checkForMatch = function()
{if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again.");
  }
};
  
var flipCard = function(cardID){
	console.log ("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].rank);
	console.log(cards[cardID].image);
	// var cardOne = cards [0];
	// cardsInPlay.push(cardOne);
	// var cardTwo = cards [2];
	// cardsInPlay.push(cardTwo);
	
};
flipCard(0);
flipCard(2);
checkForMatch();