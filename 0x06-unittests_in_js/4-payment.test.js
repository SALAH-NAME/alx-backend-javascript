const sinon = require('sinon');
const Utility = require('./utils');
const { expect } = require('chai');
const processPayment = require('./4-payment');

describe('processPayment', () => {
  it('processPayment calls console.log with the right arguments', () => {
    const consoleSpy = sinon.spy(console);
    const calculateStub = sinon.stub(Utility, 'calculateNumber');

    calculateStub.returns(10);
    processPayment(100, 20);
    expect(calculateStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateStub.callCount).to.be.equal(1);
    expect(consoleSpy.log.calledWith('The total is: 10')).to.be.true;
    expect(consoleSpy.log.callCount).to.be.equal(1);
    calculateStub.restore();
    consoleSpy.log.restore();
  });
});
