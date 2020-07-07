import { DataService } from './../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  movie$: Observable<Movie>;

  constructor(
    private data: DataService, 
    private route: ActivatedRoute, 
    private router: Router
    ) { }

  async ngOnInit() {
    const index$ = this.route.params.pipe(
      map(prms => Number(prms['mispar']))
      );
    this.movie$ = index$.pipe(
      switchMap(index => this.data.getMovieByIndex(index))
      );
  }

  goNext() {
    const index = Number(this.route.snapshot.params['mispar']);
    this.router.navigate(['/', 'movies', index + 1]);
  }

  goPrev() {
    const index = Number(this.route.snapshot.params['mispar']);
    this.router.navigate(['/', 'movies', index - 1]);
  }

  goEdit() {
    const index = Number(this.route.snapshot.params['mispar']);
    this.router.navigate(['/', 'movies', index, 'edit']);
  }

}
