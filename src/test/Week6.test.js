const detectWord = require('../Week6');

test('pull out the lowercase letters', () => {
  expect(detectWord('UcUNFYGaFYFYGtNUH')).toBe('cat');
  expect(detectWord('bEEFGBuFBRrHgUHlNFYaYr')).toBe('burglar');
  expect(detectWord('YFemHUFBbezFBYzFBYLleGBYEFGBMENTment')).toBe(
    'embezzlement'
  );
});
