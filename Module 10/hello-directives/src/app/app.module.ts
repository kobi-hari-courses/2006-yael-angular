import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MyRowComponent } from './components/my-row/my-row.component';
import { NoSpaceDirective } from './directives/no-space.directive';
import { ExpanderComponent } from './components/expander/expander.component';
import { ToggleDirective } from './components/expander/toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    MyRowComponent,
    NoSpaceDirective,
    ExpanderComponent,
    ToggleDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
