import { Directive, HostListener, ElementRef } from '@angular/core';
import { ExpanderComponent } from './expander.component';

@Directive({
  selector: 'app-expander button[appToggle]'
})
export class ToggleDirective {
  @HostListener('click')
  onClick() {
    this.expander.toggle();
  }

  constructor(
    private expander: ExpanderComponent, 
    public elem: ElementRef
    ) { }

}
