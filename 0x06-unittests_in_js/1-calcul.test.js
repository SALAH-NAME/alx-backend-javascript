const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('should return 4 for equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
    });

    it('should return 4 for equal positive numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });

    it('should return -4 for equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
    });

    it('should return -4 for equal negative numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
    });

    it('should return 0 for negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
    });

    it('should return 0 for positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
    });

    it('should return 0 for 0 and 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('should return 0 for equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
    });

    it('should return 0 for equal positive numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
    });

    it('should return 0 for equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
    });

    it('should return 0 for equal negative numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
    });

    it('should return -4 for negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0);
    });

    it('should return 4 for positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0);
    });

    it('should return 0 for 0 and 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

	describe('type == "DIVIDE"', () => {
    it('should return 4.0 for positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
    });

    it('should return -3.5 for numbers with different signs', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    });

    it('should return -3.5 for numbers with different signs (alternate)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    });

    it('should return 3.5 for negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
    });

    it('should return 1 for equal positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
    });

    it('should return 1 for equal negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
    });

    it('should return 1 for equal rounded up numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
    });

    it('should return 1 for equal rounded down numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
    });

    it('should return 0 for 0 and positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
    });

    it('should return -0 for 0 and negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
    });

    it('should return "Error" for positive number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    it('should return "Error" for positive number and number rounded down to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    });

    it('should return "Error" for positive number and number rounded up to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
    });

    it('should return "Error" for negative number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
    });

    it('should return "Error" for negative number and number rounded down to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
    });

    it('should return "Error" for negative number and number rounded up to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
    });

    it('should return "Error" for 0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
