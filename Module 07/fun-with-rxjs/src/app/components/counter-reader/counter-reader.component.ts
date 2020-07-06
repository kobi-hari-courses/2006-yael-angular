import { CounterService } from './../../services/counter.service';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css'], 
})
export class CounterReaderComponent implements OnInit, OnDestroy {
  value$: Observable<number>;
  sub: Subscription;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.value$ = this.counterService.getValue();

    // this.sub = this.counterService.getValue().subscribe(val => {
    //   console.log('changing value to: ' + val);
    //   this.value = val;
    // });
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

}
