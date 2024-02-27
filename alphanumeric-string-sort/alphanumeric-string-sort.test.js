test('Sort alphanumeric strings', () => {
  const { AlphanumericStringSort } = require('./alphanumeric-string-sort');

  expect(AlphanumericStringSort.getSorted('4@CaeDb')).toEqual('abeCD4@');
  expect(AlphanumericStringSort.getSorted('[zawf82367A]')).toEqual('afwzA37268[]');
});
