export {};


type Mojiretu = string;

const fooString: string = 'Hello';
const fooMojiretu: Mojiretu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 43
};

const example2: Profile = {
  name: 'Ham',
  age: 43
};

type Profile = {
  name: string;
  age: number;
};

type Profile2 = typeof example1;
