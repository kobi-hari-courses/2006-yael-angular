import { Directive, ElementRef, Renderer2, HostBinding, OnDestroy, HostListener, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '.bla, [appHighlight]'
})
export class HighlightDirective implements OnDestroy, OnInit {

  @HostBinding('style.background')
  background: string;

  @HostListener('click')
  whenIamClicked() {
    this.background = 'pink';
    this.acknowledged.emit();
  }

  @Input('appHighlight')
  color: string;

  @Output()
  acknowledged = new EventEmitter<void>();


  private sub: Subscription;

  constructor(
      // private host: ElementRef, 
      // private renderer: Renderer2
      ) {

        // this.sub = interval(2000).subscribe(val => {
        //   if (val % 2 === 0) {
        //     this.background = 'yellow';            
        //   } else {
        //     this.background = 'pink';
        //   }
        // });

        // (host.nativeElement as HTMLElement).style.background = 'yellow';
        // renderer.setStyle(host.nativeElement, 'background', 'lime');
  }
  ngOnInit(): void {
    this.background = this.color || 'yellow';
  }
  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

}
