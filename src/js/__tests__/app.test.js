import Character from '../app';

test.each([
  ['Ivan', 'Ivan'],
  ['Ia', undefined],
  ['Alexsander', undefined],
])('Should be correct name', (name, expected) => {
  const personage = new Character(name, 'Bowman');
  expect(personage.name).toEqual(expected);
});

test('Should be correct type', () => {
  const personage = new Character('Ivan', 'BabaYaga');
  expect(personage.type).toEqual(undefined);
});
