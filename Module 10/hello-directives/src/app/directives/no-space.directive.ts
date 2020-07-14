import { Directive, HostListener, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: 'input[type="text"][appNoSpace], input[type="search"][appNoSpace]'
})
export class NoSpaceDirective implements OnInit {
  private lastValidValue: string = '';

  isValid(value: string): boolean {
    return !value.includes(' ');
  }

  @HostListener('input', ['$event'])
  onInput(data: InputEvent) {
    let elem = data.srcElement as HTMLInputElement;
    this.validateElement(elem);
  }

  validateElement(elem: HTMLInputElement) {
    let value = elem.value;
    if (this.isValid(value)) {
      this.lastValidValue = value;
    } else {
      elem.value = this.lastValidValue;
    }
  }

  constructor(
    private elem: ElementRef
  ) { }

  ngOnInit(): void {
    this.lastValidValue = '';
    this.validateElement(this.elem.nativeElement as HTMLInputElement);
  }

}
