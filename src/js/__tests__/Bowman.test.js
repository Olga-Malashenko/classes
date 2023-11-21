import Bowman from '../Bowman';

test('should be right options for Bowman', () => {
  const personage = new Bowman('Ivan', 'Bowman');
  const expected = {
    name: 'Ivan', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(personage).toEqual(expected);
});
