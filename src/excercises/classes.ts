
class Person {
  constructor(
    public name: string,
    public address: string,
  ) {}
}

class Hero extends Person {
  // alterEgo: string;
  // name: string;
  // power: string;
  // age: number;

  constructor(
    public name: string,
    public alterEgo: string,
    public age: number,
    public power?: string
  ) {
    super(name, 'New York');
    // this.alterEgo = alterEgo;
    // this.name = name;
    // this.power = power;
    // this.age = age;
  }

  getFullName(): string {
    return `${this.name} - ${this.alterEgo}`;
  }
}

const ironman = new Hero('Tony Stark', 'Ironman', 45);

