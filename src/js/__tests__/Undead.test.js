import Undead from '../Undead';

test('should be right options for Undead', () => {
  const personage = new Undead('Ivan', 'Undead');
  const expected = {
    name: 'Ivan', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(personage).toEqual(expected);
});
