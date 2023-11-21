import Magician from '../Magician';

test('should change options with method damage', () => {
  const personage = new Magician('Ivan', 'Magician');
  personage.health = 50;
  personage.damage(20);
  expect(personage.health).toBe(38);
});

test('should an error be trown', () => {
  expect(() => {
    const personage = new Magician('Ivan', 'Magician');
    personage.health = 0;
    personage.damage(20);
  }).toThrow('Хуже уже некуда, персонаж умер');
});
