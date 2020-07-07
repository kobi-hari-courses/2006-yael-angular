import { AuthGuard } from './core/guards/auth.guard';
import { MoviesEditComponent } from './components/movies-edit/movies-edit.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccountComponent } from './components/account/account.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  {path: 'home', component: HomeComponent}, 
  {path: 'movies', component: MoviesListComponent}, 
  {path: 'movies/:mispar', component: MoviesDetailsComponent},
  {path: 'movies/:mispar/edit', 
    component: MoviesEditComponent, 
    canActivate: [AuthGuard]},
  {path: 'account', component: AccountComponent}, 
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
