export default class Character {
  constructor(name, type) {
    try {
      if (name && typeof (name) === 'string' && name.length > 2 && name.length < 10) {
        this.name = name;
      }
    } catch (err) {
      throw new Error('Имя не соответствует критериям');
    }

    try {
      const typeList = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      const declaredType = typeList.find((element) => element === type);
      if (type && typeof (type) === 'string' && declaredType) {
        this.type = type;
      }
    } catch (err) {
      throw new Error('Неизвестный тип');
    }

    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    try {
      if (this.health > 0) { // Почему в заданиее сказано "не =0"? А отрицательное разве может быть?
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
      }
    } catch (err) {
      throw new Error('Уже ничто не поможет, персонаж умер');
    }
  }

  damage(points) {
    try {
      if (this.health > 0) { // Почему в задании "">=0", ведь если =0,то уже умер?
        this.health -= points * (1 - this.defence / 100);
      }
    } catch {
      throw new Error('Хуже уже некуда, персонаж умер');
    }
  }
}
