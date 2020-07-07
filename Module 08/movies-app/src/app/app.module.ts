import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { MoviesEditComponent } from './components/movies-edit/movies-edit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    MoviesListComponent,
    MoviesDetailsComponent,
    MoviesEditComponent,
    NotFoundComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
