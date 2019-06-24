const suits = ["hearts", "clubs", "diamonds", "spades"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace" ];

const createDeck = () => {
  const deck = [];

  for(let suit of suits) {
    for(let value of values){
      deck.push({[suit]: value})
    }
  } return deck;
}

const shuffle = (deck) => {
  let m = deck.length, i;
  while (m) {
    i = Math.floor(Math.random() * m--);

    [deck[m], deck[i]] = [deck[i], deck[m]];
  }
  return deck;
}

const deal = (shuffledDeck, numberOfCards) => {
  const hand = [];
  for(let i = 0; i < numberOfCards; i ++){
    hand.push(shuffledDeck.pop());
  }
  return hand;
}

const calculateHand = (cards) => {
  let total = 0;
  cards.forEach((card) => {
    const key = Object.keys(card);
    if(card[key] === "Ace"){
      console.log(card[key]);
      total + 11 > 21 ? total + 1 : total + 11
    }else if(typeof card[key] === "string") {
      total += 10;
    } else {
      total += card[key];
    }
  })
  return total;
}

module.exports = [createDeck, shuffle, deal, calculateHand];
