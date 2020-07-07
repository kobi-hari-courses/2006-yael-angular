import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}
