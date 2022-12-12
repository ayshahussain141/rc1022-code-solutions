const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = (add, value) => add + value;
const adding = numbers.reduce(sum);
console.log('sum', adding);

const product = (times, value) => times * value;
const multiply = numbers.reduce(product);
console.log('product', multiply);

const all = (result, value) => {
  if (value.type === 'deposit') {
    return result + value.amount;
  }
  return result - value.amount;
};
console.log('balance', account.reduce(all, 0));

const trait = (result, value) => {
  return Object.assign(result, value);
};
console.log('Object', traits.reduce(trait, 0));
