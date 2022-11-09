/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var three = new Transaction('deposit', amount);
    this.transactions.push(three);

    return true;
  } else { return false; }

};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var three = new Transaction('withdrawal', amount);

    this.transactions.push(three);
    return true;
  } else { return false; }
};

Account.prototype.getBalance = function () {
  var deposits = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'withdrawal') {
      deposits -= this.transactions[i].amount;
    } else if (this.transactions[i].type === 'deposit') {
      deposits += this.transactions[i].amount;
    }
  }
  return deposits;
};
