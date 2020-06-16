type smallNumber = 1 | 2 | 3 | 4 | 5 | 6;
type evenNumber = 2 | 4 | 6| 8 | 10;

interface Printable {
    print(): void;
}

interface Scannable {
    scan(): void;
}

function PrintAndScan(x: Printable & Scannable) {
    x.print();
    x.scan();
}

let se : smallNumber & evenNumber;