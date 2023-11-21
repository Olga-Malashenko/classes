import Daemon from '../Daemon';

test('should be right options for Daemon', () => {
  const personage = new Daemon('Ivan', 'Daemon');
  const expected = {
    name: 'Ivan', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  expect(personage).toEqual(expected);
});
