import Character from '../app';

test('should an error be trown', () => {
  expect(() => {
    new Character('Ivan', 'BabaYaga');
  }).toThrow('Неизвестный тип');
});

test('should an error be trown', () => {
  expect(() => {
    new Character('Alexsander', 'Bowman');
  }).toThrow('Имя не соответствует критериям');
});
