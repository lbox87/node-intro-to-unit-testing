// note to self: enable Chai assertion library
const expect = require('chai').expect;
// reference fizzbuzzer.js (whats the difference in requiring
// like this and using express router naming conventions?)
const fizzBuzzer = require('../fizzBuzzer');

// define what fizzBuzzer does and test 
// values that should work
describe('fizzBuzzer', function() {

// test the if statement for numbers multiples of 15
  it('should return "fizz-buzz" for multiples of 15', function() {
    //  sample numbers 15, 30, and 45
    [15, 30, 45].forEach(function(input) {
        // and the expected return should be fizz-buzz
        // or throw an error 
      expect(fizzBuzzer(input)).to.equal('fizz-buzz');
    });
  });

// same as above but for multiples of 3 and return fizz
  it('should return "fizz" for multiples of 3', function() {
    [3, 6, 9, 12].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz');
    });
  });
// same as above but for multiples of 5 and return buzz
  it('should return "buzz" for multiples of 5', function() {
    [5, 10, 20].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('buzz');
    });
  });
// same as above but for numbers not multiples
// of 5 or 3 and return the number itself
  it('should return number if not mult of 3 or 5', function() {
    [1, 2, 4, 7].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal(input);
    });
  });

//  test non-number inputs will throw an error
  it('should produce error if input isn\'t number', function() {
    const badInputs = [true, false, 'cat', function() {}, [1, 2, 3]];
    badInputs.forEach(function(input) {
      expect(function() {
          fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});