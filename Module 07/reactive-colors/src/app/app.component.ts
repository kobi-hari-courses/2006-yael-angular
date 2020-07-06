import { ColorsService } from './services/colors.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, merge } from 'rxjs';
import { ColorModel } from './models/color.model';
import { map, flatMap, switchMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  colors$: Observable<ColorModel[]>;
  search$ = new Subject<string>();
  isBusy$: Observable<boolean>;

  constructor(private colors: ColorsService){}

  ngOnInit(): void {
    this.colors$ = this.search$.pipe(
      debounceTime(500),
      switchMap(str => this.colors.search(str))
    );

    const true$ = this.search$.pipe(map(_ => true));
    const false$ = this.colors$.pipe(map(_ => false));
    this.isBusy$ = merge(true$, false$);
  }

  onInput(value: string) {
    this.search$.next(value);
  }
}
