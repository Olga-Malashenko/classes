// TODO: write your code here
import sum from './basic';

// console.log('worked');
// console.log(sum([1, 2]));

export class Character {
  constructor(name, type) {
    try {
      if (typeof (name) === 'string' && name.length > 2 && name.length < 10) {
        this.name = name;
      } else {
        console.log('Имя не соответствует критериям');
      }
    } catch (err) {
      throw new Error('Имя не соответствует критериям');
    }

    try {
      const typeList = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      let str = false;
      for (const element of typeList) {
        if (type === element) {
          str = true;
          break;
        }
      }
      if (typeof (type) === 'string' && str) {
        this.type = type;
      } else {
        console.log('Неизвестный тип');
      }
    } catch (err) {
      throw new Error('Неизвестный тип');
    }

    this.health = 100;
    this.level = 1;

    let attack;
    let defence;
    switch (type) {
      case 'Bowman':
        attack = 25;
        defence = 25;
        break;
      case 'Swordsman':
        attack = 40;
        defence = 10;
        break;
      case 'Magician':
        attack = 10;
        defence = 40;
        break;
      case 'Undead':
        attack = 25;
        defence = 25;
        break;
      case 'Zombie':
        attack = 40;
        defence = 10;
        break;
      case 'Daemon':
        attack = 10;
        defence = 40;
        break;
    }
    this.attack = attack;
    this.defence = defence;
  }
}
