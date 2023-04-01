interface MusicPlayer {
  volume: number;
  second: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const musicPlayer: MusicPlayer = {
  volume: 90,
  second: 36,
  song: 'Mess',
  details: {
    author: 'Ed Sheeran',
    year: 2015,
  },
};

const { volume, second, song, details } = musicPlayer;
const { author } = details;

console.log('The volume is: ', volume);
console.log('The second is: ', second);
console.log('The song is: ', song);
console.log('The author is: ', author);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [p1, p2, p3] = dbz;