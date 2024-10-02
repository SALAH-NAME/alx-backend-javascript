const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 3 for floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('should return 3 when rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('should return 3 when rounding down both a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('should return 3 when rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('should return 4 when rounding up b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('should return 6 when rounding up both a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('should return 5 when rounding up a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('should return 5 when rounding down both a and b\'s floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
