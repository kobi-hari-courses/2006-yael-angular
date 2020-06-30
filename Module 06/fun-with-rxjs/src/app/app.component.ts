import { Component } from '@angular/core';
import { Observable, interval, Observer, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createIntervalObservable(): Observable<number> {
    return interval(1000);
  }

  createObserver(id: string): Observer<number> {
    return {
      next: (val: number) => {
        console.log('observer ' + id + ' next: ' + val)
      }, 
      complete: () => {
        console.log('observer ' + id + ' completed')
      }, 
      error: (err) => {
        console.log('observer ' + id + ' error ' + err)
      }      
    }
  }

  createCustomObservable(): Observable<number> {
    return new Observable<number>(observer => {
      observer.next(0);
      setTimeout(() => observer.next(42), 3000);
      setTimeout(() => observer.next(60), 5000);
      setTimeout(() => observer.next(100), 8000);
      setTimeout(() => observer.complete(), 10000);
    });
  }

  createSubject(): Observable<number> {
    const subject = new Subject<number>();

    subject.next(0);

    setTimeout(() => subject.next(42), 2000);
    setTimeout(() => subject.next(60), 5000);
    setTimeout(() => subject.next(100), 8000);
    setTimeout(() => subject.complete(), 10000);
    
    return subject;
  }

  createBehaviorSubject(): Observable<number> {
    const subject = new BehaviorSubject<number>(0);

    setTimeout(() => subject.next(42), 2000);
    setTimeout(() => subject.next(60), 5000);
    setTimeout(() => subject.next(100), 8000);
    setTimeout(() => subject.complete(), 10000);
    
    return subject;
  }


  go() {
    const observable1 = this.createBehaviorSubject ();
    const observer1 = this.createObserver('First');
    const observer2 = this.createObserver('Second');

    observable1.subscribe(observer1);

    setTimeout(() => {
      observable1.subscribe(observer2);
    } , 2500);

  }
}
