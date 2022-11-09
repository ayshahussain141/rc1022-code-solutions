/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var three = new Account(this.nextAccountNumber, holder);
    three.deposit(balance);
    this.accounts.push(three);
    this.nextAccountNumber++;
    return three.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (number === this.accounts[i].number) {
      return this.accounts[i];
    }

  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var all = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    all += this.accounts[i].getBalance();
  }
  return all;
};
