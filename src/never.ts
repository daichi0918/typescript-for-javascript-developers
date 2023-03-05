export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let resulet = error('test');
  console.log({ resulet });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
let bar: never = error('only me!');
