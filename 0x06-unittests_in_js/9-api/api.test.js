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

  it('GET /cart/:id should return the correct response for a valid :id', (done) => {
    httpRequest.get(`${BASE_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id should return 404 for negative number values in :id', (done) => {
    httpRequest.get(`${BASE_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('GET /cart/:id should return 404 for non-numeric values in :id', (done) => {
    httpRequest.get(`${BASE_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
