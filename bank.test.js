const Bank = require('./bank')

describe('Bank', () => {
  let bank;
  beforeEach(() => {
    bank = new Bank;
  })

  describe('printStatement', () => {

    it('should allow user to deposit an amount and add it to the total', () => {
      bank.deposit(2000);
      expect(bank.total).toEqual(2000.00);
    })

    it('should allow user to withdraw an amount and deduct it from the total', () => {
      bank.deposit(2000);
      bank.withdraw(1000);
      expect(bank.total).toEqual(1000.00);
    })
  })

})

