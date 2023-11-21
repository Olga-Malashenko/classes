import Magician from '../Magician';

test('should change options with method levelUp', () => {
  const personage = new Magician('Ivan', 'Magician');
  personage.health = 50;
  personage.levelUp();
  const expected = {
    name: 'Ivan', type: 'Magician', health: 100, level: 2, attack: 12, defence: 48,
  };
  expect(personage).toEqual(expected);
});

test('should an error be trown', () => {
  expect(() => {
    const personage = new Magician('Ivan', 'Magician');
    personage.health = 0;
    personage.levelUp();
  }).toThrow('Уже ничто не поможет, персонаж умер');
});
