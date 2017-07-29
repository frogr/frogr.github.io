$(document).ready(function(){
var deckID = "cbw7wukkqho9";
console.log(deckID);
var shuffle = "https://deckofcardsapi.com/api/deck/"+deckID+"/shuffle/";
console.log(shuffle);
var drawCard = "https://deckofcardsapi.com/api/deck/"+deckID+"/draw/";
console.log(drawCard);

// init global variables for ease of use 
var image;
var suit;
var code;
var value;

// drawing a card json reader


$.getJSON(drawCard, function(data) {
    image = data.cards[0].image;
    suit = data.cards[0].suit;
    code = data.cards[0].code;
    value = data.cards[0].value;
    console.log(image, suit, code, value);
});
	
	$('#drawCard1').click(function(){
		document.getElementById("imageDisplay1").innerHTML = "<img src='" + image + "'>"
});
	$('#drawCard2').click(function(){
		
	});
	$('#drawCard3').click(function(){
		
	});
	$('#shuffleButton').click(function(){
		
	});

});