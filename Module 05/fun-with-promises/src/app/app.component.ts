import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createPromise(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => resolve(42), 3000);
    });
  }


  go() {
    const p = this.createPromise();
    console.log('Promise created');

    let q = p.then(val => {
      console.log('Promise completed with results: ' + val);
      let p2 = this.createPromise();
      p2.then(val => {
        console.log('koev li hasrosh');
      })
    });


    console.log('later');

  }
}
