import Magician from '../Magician';

test('should be right options for Magician', () => {
  const personage = new Magician('Ivan', 'Magician');
  const expected = {
    name: 'Ivan', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(personage).toEqual(expected);
});
