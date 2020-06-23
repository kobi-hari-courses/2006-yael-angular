import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-title', 
    templateUrl: './title.component.html', 
    styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
    @Input()
    caption: string;

    @Input()
    color: string = 'red';

    constructor() {
    }

    ngOnInit(): void {
        if (typeof(this.caption) === 'undefined'){
            throw "Error: caption property is mandotry";
        }
    }
}