class Bank {

  constructor(){
    this.total = 0;
    this.history = [];
  }

  deposit(amount) {
    this.total += amount;
    return this.total; 
  }

  withdraw(amount) {
    this.total -= amount;
    return this.total;
  }

  getTheDate() {
    const date = new Date()
    return date.getDate();
  }
}

module.exports = Bank 
let bank = new Bank;