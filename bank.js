class Bank {

  constructor(){
    this.total = 0;
    this.history = [];
  }

  deposit(amount) {
    this.total += amount;
    return this.total; 
  }
}

module.exports = Bank 
let bank = new Bank;