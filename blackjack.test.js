const functions = require("./blackjack");
const createDeck = functions[0];
const shuffle = functions[1];
const deal = functions[2];
const calculateHand = functions[3];
const shuffledDeck = shuffle(createDeck());

test("Should be 52 cards in the deck", () => {
  expect(createDeck().length).toBe(52);
});

test("Shuffle function should return cards in random order", () => {
  expect(shuffledDeck).not.toBe(createDeck())
});

test("Deal function should return 2 random cards", () => {
  const hand = deal(shuffledDeck, 2);
  expect(hand.length).toBe(2);
  expect(hand[0]).not.toBe(hand[1]);
})

test("Function should calculate hands according to blackjack rules", () => {
  const hand1 = [{hearts: "Queen"}, {spades: 5}];
  const hand2 = [{hearts: "Ace"}, {clubs: 2}];
  const hand3 = [{diamonds: "Ace"}, {diamonds: "King"}];
  const hand4 = [{diamonds: "Ace"}, {spades: 3}, {hearts: "queen"}];

  expect(calculateHand(hand1)).toBe(15);
  expect(calculateHand(hand2)).toBe(13);
  expect(calculateHand(hand3)).toBe(21);
  expect(calculateHand(hand4)).toBe(14);
})