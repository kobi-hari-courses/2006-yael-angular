import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthenticationService, 
    private router: Router
    ){}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {  
      console.log('Guard in...');
      console.log(state.url);

      let p = this.auth.isLoggedIn().pipe(
                first()
              ).toPromise();
      let allowed = await p;

      console.log('guard result: ' + allowed);

      if (allowed) return true;

      this.auth.setTargetURl(state.url);
      return this.router.parseUrl('account');

  }
  
}
