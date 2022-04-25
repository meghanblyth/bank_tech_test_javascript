const Bank = require('./bank')

describe('Bank', () => {
  let bank;
  beforeEach(() => {
    bank = new Bank;
  })

  describe('printStatement', () => {
    it('should allow user to deposit an amount and add it to the total', () => {
      bank.deposit(20);
      expect(bank.total).toEqual(20.00);
    })
  })

})

