import Magician from '../Magician';

test.each([
  [50, {
    name: 'Ivan', type: 'Magician', health: 100, level: 2, attack: 12, defence: 48,
  }],
  [0, {
    name: 'Ivan', type: 'Magician', health: 0, level: 1, attack: 10, defence: 40,
  }],
])('should change options with method levelUp', (health, expected) => {
  const personage = new Magician('Ivan', 'Magician');
  personage.health = health;
  personage.levelUp();
  expect(personage).toEqual(expected);
});
