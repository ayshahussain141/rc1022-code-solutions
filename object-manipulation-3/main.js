console.log('Lodash is loaded:', typeof _ !== 'undefined');
var player1 = {
  name: 'Player 1',
  hand: []
};
var player2 = {
  name: 'Player 2',
  hand: []
};
var player3 = {
  name: 'Player 3',
  hand: []
};
var player4 = {
  name: 'Player 4',
  hand: []
};
var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
var suits = ['C', 'D', 'H', 'S'];
var deck = [];
for (var i = 0; i < suits.length; i++) {
  for (var a = 0; a < ranks.length; a++) {
    var one = {
      cardName: ranks[a] + suits[i],
      value: values[a]
    };
    deck.push(one);
  }
}
var shuffle = _.shuffle(deck);
player1.hand.push(_.slice(shuffle, [0], [2]));
player2.hand.push(_.slice(shuffle, [2], [4]));
player3.hand.push(_.slice(shuffle, [4], [6]));
player4.hand.push(_.slice(shuffle, [6], [8]));
var eighteen = {
  player1: _.add(player1.hand[0][0].value, player1.hand[0][1].value),
  player2: _.add(player2.hand[0][0].value, player2.hand[0][1].value),
  player3: _.add(player3.hand[0][0].value, player3.hand[0][1].value),
  player4: _.add(player4.hand[0][0].value, player4.hand[0][1].value)
};
var max = Object.keys(eighteen).reduce((k, v) => Math.max(k, eighteen[v]), -Infinity);
var result = Object.keys(eighteen).filter(v => eighteen[v] === max);
console.log(result);
