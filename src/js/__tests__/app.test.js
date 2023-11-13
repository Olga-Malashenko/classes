import { Character } from '../app';

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
})

test.each([
  ['Bowman', 25],
  ['Swordsman', 40],
  ['Magician', 10],
  ['Undead', 25],
  ['Zombie', 40],
  ['Daemon', 10],
])('should be right options for type %s typeName', (typeName, expected) => {
  const personage = new Character('Ivan', typeName);
  expect(personage.attack).toBe(expected);
});
