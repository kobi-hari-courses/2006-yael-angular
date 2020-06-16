class Circle {
    name: 'Circle';
    radius: number;
}

class Rectangle  {
    name: 'Rectangle';
    width: number;
    height: number;
}

function doSomething(shape: Circle | Rectangle) {
    if (shape.name === 'Circle') {
        let r = shape.radius;
    } else {
        // here shape is known to be rectangle
    }

}