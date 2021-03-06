//you call back the square function from square.js file
const { square, cube } = require('./square');
//to run your test just make sure your in the test file and just type jest in terminal
describe('square function', function () {
  test('square should square a number', function () {
    const res = square(3)
    expect(res).toEqual(9)
  })
//you call function by writing test('string describing what your testing', function(){
 // const, and what you expect back})
  test('square should square negative numbers', function () {
    const num = square(-9);
    expect(num).toEqual(81)
  })
})
//describe lets you group tests together
describe('cube function', function () {
  test('should cube a positive number', function () {
    const num = cube(3);
    expect(num).toEqual(27)
    const num2 = cube(2);
    expect(num2).toEqual(8)
  })
})
