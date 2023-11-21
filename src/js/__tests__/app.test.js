import Character from '../app';

test('Should be correct name', () => {
  const personage = new Character('Ivan', 'Bowman');
  expect(personage.name).toEqual('Ivan');
});
