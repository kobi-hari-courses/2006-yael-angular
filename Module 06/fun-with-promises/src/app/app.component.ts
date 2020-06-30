import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createRandomStringPromise(): Promise<string> {
    const duration = Math.ceil((Math.random()*2000 + 2000));
    const value = Math.ceil(Math.random()*9 + 1);

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value.toString()), duration)
    });
  }

  createRandomPromise(): Promise<number> {
    const duration = Math.ceil((Math.random()*2000 + 2000));
    const value = Math.ceil(Math.random()*9 + 1);

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(value), duration)
    });
  }

  createPromise(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => resolve(42), 3000);
    });
  }

  async add(o1: number, o2: number) {
    return o1 + o2;
  }


  async go() {

    console.log('starting');

    const ps = [
      this.createRandomPromise(), 
      this.createRandomStringPromise(), 
      this.createRandomPromise()
    ];

    // const pall = Promise.all(ps);
    const pfirst = Promise.race(ps);

    const ress = await pfirst;

  }

  async start(): Promise<string> {
    console.log('1');
    const p = this.createPromise();
    console.log('2');

    let res = await p;
    console.log('3');

    return 'Hello';
  }
}
