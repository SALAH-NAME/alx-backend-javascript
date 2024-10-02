const { expect } = require('chai');
const fetchPaymentToken = require('./6-payment_token');

describe('fetchPaymentToken', () => {
  it('fetchPaymentToken(success), where success == true', (done) => {
    fetchPaymentToken(true)
      .then((res) => {
        expect(res).to.deep.equal({ data: 'Successful response from the API' });
        done();
      });
  });
});
