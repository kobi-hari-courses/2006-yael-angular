import { WrongAdditionService } from './../../services/wrong-addition.service';
import { AdditionService } from './../../services/addition.service';
import { Component, OnInit, Inject } from '@angular/core';
import { IAdditionService } from 'src/app/services/addition-interface';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  result: number;

  constructor(
    @Inject(AdditionService)public addition: IAdditionService, 
    public wrongAddtion: WrongAdditionService
    ) { }

  ngOnInit(): void {
  }

  doCalculation(m1: string, m2: string) {
    const l1 = Number(m1);
    const l2 = Number(m2);

    // activate service to calculate the sum
    this.result = this.addition.add(l1, l2);
  }

}
