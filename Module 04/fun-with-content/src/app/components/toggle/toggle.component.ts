import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  isExpanded: boolean = true;

  toggle() {
    this.isExpanded = !this.isExpanded
  }

  constructor() { }

  ngOnInit(): void {
  }

}
