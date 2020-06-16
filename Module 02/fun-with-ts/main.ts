class Person {
    constructor(
        public firstName: string, 
        public lastName: string
    ) {}

    log() {
        console.log('My name is' + this.firstName + ' ' + this.lastName);
    }

    getLocation(): [number, number, string] {
        return [33.2313, 31.123132, "Haifa"];
    }
}

let p = new Person('John', 'Smith');
p.log();

let loc = p.getLocation();
let l0 = loc[0];
let l2 = loc[2];


let ar: number[] = [2, 4, 6];
ar.push(5, 8, 10);
console.log(ar);