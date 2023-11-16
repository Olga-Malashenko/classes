import Character from '../app';

test('should an error be trown', () => {
  expect(() => {
    const personage = new Character('Ivan', 'BabaYaga');
  }).toThrow('Неизвестный тип');
});
