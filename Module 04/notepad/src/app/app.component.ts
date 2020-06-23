import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // data
  koteret: string = 'Amazing Notepad App';
  koteretReka: string = 'blue';

  colors = ['red', 'green', 'blue', 'magenta', 'brown', 'black', 'cyan'];
  fonts = ['Arial', 'Consolas', 'Tahoma', 'Verdana', 'Times new Roman', 'David'];
  sizes = ['12px', '18px', '24px', '36px', '50px', '80px'];

  selectedColor = this.colors[0];
  selectedFont = this.fonts[0];
  selectedSize = this.sizes[0];

  // actions
  setColor(value: string) {
    console.log('setting color to ' + value);
    this.selectedColor = value;
  }

  setFont(value: string) {
    this.selectedFont = value;
  }

  setSize(value: string) {
    this.selectedSize = value;
  }
}
