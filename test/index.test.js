const filterControl = require('../src/index.js');

test('filter \\n', () => {
  expect(filterControl('abc\ndef')).toBe('abcdef');
});

test('expect string', () => {
  function testError(){
    filterControl(123)
  }
  expect(testError).toThrowError();
});