import Magician from '../Magician';

test.each([
  [50, 38],
  [0, 0],
])('should change options with method damage', (health, expected) => {
  const personage = new Magician('Ivan', 'Magician');
  personage.health = health;
  personage.damage(20);
  expect(personage.health).toEqual(expected);
});
