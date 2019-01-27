const filterControl = require('../src/index.js');

test('filter \\n', () => {
  expect(filterControl('abc\ndef')).toBe('abcdef');
});