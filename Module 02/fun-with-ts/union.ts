type DyeValue = 1 | 2 | 3 | 4 | 5 | 6;
type DayOfWeek = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday';

function foo(a: number): boolean | string {
    if (a > 50) return 'Large';

    return false;
}

function randomDye() : DyeValue {
    return 1;
}

let d1 : DyeValue = randomDye();
let d2: DyeValue = 6;

let x : boolean | string;

let y : boolean;

if (typeof(x) === 'boolean') {
    y = x;
}

function doSomethingWithDay(day: DayOfWeek) {
    if (day === 'Sunday') {

    } else {
    }
}
