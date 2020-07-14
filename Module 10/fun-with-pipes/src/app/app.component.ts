import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = [
    'Red', 
    'Green', 
    'Blue', 
    'Magenta', 
    'Cyan', 
    'Yellow'
  ];

  modifyArray() {
    this.colors[1] = 'Beer';
    this.colors.push('Peer');

    // this.colors = 
    //     this.colors
    //     .map(v => v === 'Green' ? 'Beer' : v);

  }


  today = Date.now();

  stam = {
    abc: 12, 
    def: 'hello', 
    ghi: {
      x: 10, 
      y: true, 
      z: 'world'
    }
  }

  txt = 'Good morning and lets play with angular pipes';
}
