import { IAdditionService } from './addition-interface';
import { Injectable } from '@angular/core';
import { AuditService } from './audit.service';

@Injectable({
  providedIn: 'root'
})
export class WrongAdditionService implements IAdditionService {
  public id: number;

  constructor(private audit: AuditService) {
      this.id = Math.ceil(Math.random()*100000000);
      console.log('Wrong Addition Service created with id: ' + this.id);
  }


  add(o1: number, o2: number) {
      this.audit.audit('Adding ' + o1 + ' , ' + o2);
      return o1 + o2 + 1;
  }
}
