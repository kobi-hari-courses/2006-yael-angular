import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn$: Observable<boolean>;

  constructor(
    private auth: AuthenticationService
  ){}

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLoggedIn();
  }}
