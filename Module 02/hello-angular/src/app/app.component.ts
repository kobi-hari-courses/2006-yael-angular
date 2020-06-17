import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // data

  keyword: string = '';
  results: string[] = [];
  isBusy: boolean = false;

  // actions
  setKeyword(value: string) {
    this.keyword = value;
  }

  search() {
    let currentWord = this.keyword;
    this.isBusy = true;

    setTimeout(() => {
      this.results = [
        currentWord + ' 1', 
        currentWord + ' 2', 
        currentWord + ' 3'
      ];
      this.isBusy = false;
    }, 5000);



  }


}
