import {
  Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon,
} from '../app';

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

test('should be right options for Bowman', () => {
  const personage = new Bowman('Ivan', 'Bowman');
  expect(personage.attack).toBe(25);
});

test('should be right options for Swordsman', () => {
  const personage = new Swordsman('Ivan', 'Swordsman');
  expect(personage.attack).toBe(40);
});

test('should be right options for Magician', () => {
  const personage = new Magician('Ivan', 'Magician');
  expect(personage.attack).toBe(10);
});

test('should be right options for Undead', () => {
  const personage = new Undead('Ivan', 'Undead');
  expect(personage.attack).toBe(25);
});

test('should be right options for Zombie', () => {
  const personage = new Zombie('Ivan', 'Zombie');
  expect(personage.attack).toBe(40);
});

test('should be right options for Daemon', () => {
  const personage = new Daemon('Ivan', 'Daemon');
  expect(personage.attack).toBe(10);
});
