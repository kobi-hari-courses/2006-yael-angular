import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private state = false;
  private state$ = new BehaviorSubject<boolean>(this.state);

  private targetUrl: string | null = null;

  constructor(
    private router: Router
  ) { }

  setTargetURl(url: string) {
    this.targetUrl = url;
  }

  isLoggedIn(): Observable<boolean> {
    return this.state$.asObservable();
  }

  login() {
    this.state = true;
    this.state$.next(this.state);
    if (this.targetUrl !== null) {
      this.router.navigateByUrl(this.targetUrl);
      this.targetUrl = null;
    }
  }

  logout() {
    this.state = false;
    this.state$.next(this.state);
  }
}