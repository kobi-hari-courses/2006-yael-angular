import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-editor',
  templateUrl: './counter-editor.component.html',
  styleUrls: ['./counter-editor.component.css']
})
export class CounterEditorComponent  {
  constructor(private counter: CounterService) { }

  async onIncrement() {
    await this.counter.increment();
  }

  async onDecrement() {
    await this.counter.decrement();
  }

}
