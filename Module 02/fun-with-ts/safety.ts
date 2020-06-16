class Human {
    name: string;
    age: number;
    location: string;
}

class Dog {
    name: string;
    age: number;
}

let h: Human = new Human();
let d: {name: string, age: number, location? : string};

d = new Dog();