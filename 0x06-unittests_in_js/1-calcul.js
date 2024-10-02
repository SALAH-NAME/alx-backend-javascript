function calculateNumber(type, a, b) {
    const new_a = Math.round(a);
    const new_b = Math.round(b);
    
    if (type === 'SUM') {
      return new_a + new_b;
    }
    if (type === 'SUBTRACT') {
      return new_a - new_b;
    }
    if (type === 'DIVIDE') {
      if (new_b === 0) {
        return 'Error';
      }
      return new_a / new_b;
    }
  }
  
module.exports = calculateNumber;
