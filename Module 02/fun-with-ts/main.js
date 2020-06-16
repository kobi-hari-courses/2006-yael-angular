var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.log = function () {
        console.log('My name is' + this.firstName + ' ' + this.lastName);
    };
    return Person;
}());
var p = new Person('John', 'Smith');
p.log();
