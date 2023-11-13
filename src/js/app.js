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
  
      this.attack = 1;
      this.defence = 1;
    }
  }
  
  export class Bowman extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 25;
      this.defence = 25;
    }
  }
  
  export class Swordsman extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 40;
      this.defence = 10;
    }
  }
  
  export class Magician extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 10;
      this.defence = 40;
    }
  }
  
  export class Undead extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 25;
      this.defence = 25;
    }
  }
  
  export class Zombie extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 40;
      this.defence = 10;
    }
  }
  
  export class Daemon extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 10;
      this.defence = 40;
    }
  }
  