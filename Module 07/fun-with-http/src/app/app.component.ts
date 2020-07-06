import { DataService } from './services/data.service';
import { Show } from './models/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  shows: Show[] = [];

  constructor(private data: DataService){}

  async loadShows() {
    this.shows = await this.data.getAllShows();
  }

  async ngOnInit() {
  }
}
