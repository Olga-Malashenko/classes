import Zombie from '../Zombie';

test('should be right options for Zombie', () => {
  const personage = new Zombie('Ivan', 'Zombie');
  const expected = {
    name: 'Ivan', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  expect(personage).toEqual(expected);
});
