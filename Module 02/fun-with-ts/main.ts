class Person {
    constructor(
        public firstName: string, 
        public lastName: string
    ) {}

    log() {
        console.log('My name is' + this.firstName + ' ' + this.lastName);
    }
}

let p = new Person('John', 'Smith');
p.log();