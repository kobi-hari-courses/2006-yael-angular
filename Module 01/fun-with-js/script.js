function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.log = function() {
            console.log('My name is ' + this.firstName + ' ' + this.lastName);    
    }    
}

var person = new Person('John', 'Smith');

var oyvavoy = Person('Jane', 'Smith');

person.log();
person.firstName = 'Ronny';

setTimeout(person.log.bind(person) , 2000);


console.log(person);