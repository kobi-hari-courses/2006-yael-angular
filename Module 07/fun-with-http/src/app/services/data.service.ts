import { Injectable } from '@angular/core';
import { Show } from '../models/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly baseUrl = 'http://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  getAllShows(): Promise<Show[]> {
    const url = `${this.baseUrl}/shows`;
    const res = this.http.get<Show[]>(url).toPromise();
    return res;
  }

  getShowById(id: string): Promise<Show> {
    const url = `${this.baseUrl}/shows/${id}`;
    const res = this.http.get<Show>(url).toPromise();
    return res;
  }
}
