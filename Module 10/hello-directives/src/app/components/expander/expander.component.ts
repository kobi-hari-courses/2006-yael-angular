import { ToggleDirective } from './toggle.directive';
import { Component, OnInit, ContentChild, AfterContentInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements OnInit, AfterContentInit {
  @ContentChild(ToggleDirective)
  toggleDirective: ToggleDirective;


  isExpanded: boolean = true;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  constructor(private renderer: Renderer2) { }

  ngAfterContentInit(): void {
    this.renderer.setStyle(this.toggleDirective.elem.nativeElement, 
      'background', 'orange');
    
  }

  ngOnInit(): void {
  }

}
