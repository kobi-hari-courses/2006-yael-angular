import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterReaderComponent } from './components/counter-reader/counter-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterReaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
