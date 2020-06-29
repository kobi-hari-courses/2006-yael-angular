import { IAdditionService } from './../../services/addition-interface';
import { WrongAdditionService } from './../../services/wrong-addition.service';
import { AdditionService } from './../../services/addition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [
    {
      provide: WrongAdditionService, 
      useClass: WrongAdditionService
    },
    {
      provide: AdditionService,
      useExisting: WrongAdditionService
    },
  ]
})
export class GroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
