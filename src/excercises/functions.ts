
function sum(a: number, b: number): number {
  return a + b;
}

function multiplicar(a: number, b: number): number {
  return a * b;
}

interface CharacterLOL {
  name: string;
  hp: number;
  showHp: () => void;
}

function heal( character: CharacterLOL, amount: number ) {
  character.hp += amount;
}

const newCharacter: CharacterLOL = {
  name: 'Nato',
  hp: 4444,
  showHp() {
    console.log('Health points: ', this.hp);
  }
};

heal( newCharacter, 1000 );
newCharacter.showHp();
