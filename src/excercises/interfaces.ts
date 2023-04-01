interface Character {
  name: string;
  hp: number;
  skills: string[];
  origin?: string;
}

const character: Character = {
  name: 'Nato',
  hp: 4444,
  skills: ['Bash', 'Counter', 'Healing'],
}

character.origin = 'Earth';