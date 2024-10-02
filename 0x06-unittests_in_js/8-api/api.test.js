const httpRequest = require('request');
const { expect } = require('chai');

describe('Payment API Integration Test', () => {
  const BASE_URL = 'http://localhost:7865';

  it('GET / should return the correct response', (done) => {
    httpRequest.get(`${BASE_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
