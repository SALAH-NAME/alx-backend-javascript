const sinon = require('sinon');
const { expect } = require('chai');
const processPayment = require('./5-payment');

describe('processPayment', () => {
  let consoleSpy;

  beforeEach(() => {
    if (!consoleSpy) {
      consoleSpy = sinon.spy(console);
    }
  });

  afterEach(() => {
    consoleSpy.log.resetHistory();
  });

  it('processPayment(100, 20) logs "The total is: 120" to the console', () => {
    processPayment(100, 20);
    expect(consoleSpy.log.calledWith('The total is: 120')).to.be.true;
    expect(consoleSpy.log.calledOnce).to.be.true;
  });

  it('processPayment(10, 10) logs "The total is: 20" to the console', () => {
    processPayment(10, 10);
    expect(consoleSpy.log.calledWith('The total is: 20')).to.be.true;
    expect(consoleSpy.log.calledOnce).to.be.true;
  });
});
