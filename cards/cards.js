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
});
console.log(image, suit, code, value);

// var card = [
//     {

//         image: drawCard.cards.image,
//         suit: drawCard.cards.suit,
//         code: drawCard.cards.code,
//         value: drawCard.cards.value

//     }
// ]