const sinon = require('sinon');
const Utility = require('./utils');
const { expect } = require('chai');
const processPayment = require('./3-payment');

describe('processPayment', () => {
  it('processPayment uses the calculateNumber method of Utility', () => {
    const spy = sinon.spy(Utility);

    processPayment(100, 20);
    expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calculateNumber.callCount).to.be.equal(1);
    spy.calculateNumber.restore();
  });
});
