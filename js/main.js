// console.log ("up and runing");
var tally = {good:0, bad:0}

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

var updateScore = function(){
	document.getElementsByClassName('success')[0].textContent='Went well: ' +tally.good;
	document.getElementsByClassName('fail')[0].textContent='Went bad: ' + tally.bad;
}

var checkForMatch = function() {
	if (cardsInPlay.length > 1)
	{
		if (cardsInPlay[0] === cardsInPlay[1]) {
	      alert("You found a match!");
	      tally.good++;
	  } else {
	      alert("Sorry, try again.");
	      tally.bad++;
	      reset();
  	}
 }
 updateScore();
};
  
var flipCard = function(){
	var cardID = this.getAttribute('data-id');
	console.log (cardID);
	console.log ("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	document.querySelectorAll('img')[cardID].setAttribute('src', cards[cardID].image);
	checkForMatch();

	
};
var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard)
		document.getElementById('game-board').appendChild(cardElement);
  }

};

var reset = function(){
	for (var i = 0; i < cards.length; i++) {
		document.querySelectorAll('img')[i].setAttribute('src', 'images/back.png');
  }
  cardsInPlay = [];
  
}

document.getElementById('reset').addEventListener('click', reset);
createBoard();
