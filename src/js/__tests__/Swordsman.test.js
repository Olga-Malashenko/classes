import Swordsman from '../Swordsman';

test('should be right options for Swordsman', () => {
  const personage = new Swordsman('Ivan', 'Swordsman');
  const expected = {
    name: 'Ivan', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(personage).toEqual(expected);
});
