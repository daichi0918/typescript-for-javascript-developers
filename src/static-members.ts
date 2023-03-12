export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsuhi';
  static latName: string = 'Ishida'; 

  static work() {
    // "Hey, guys! This is Atsushi! Are you interested in TypeSript? Let's drive into TypeScript!";
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeSript? Let's drive into TypeScript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());
