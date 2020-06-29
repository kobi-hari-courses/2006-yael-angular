import { IAdditionService } from './addition-interface';
import { AuditService } from './audit.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AdditionService implements IAdditionService {
    public id: number;

    constructor(private audit: AuditService) {
        this.id = Math.ceil(Math.random()*100000000);
        console.log('Addition Service created with id: ' + this.id);
    }


    add(o1: number, o2: number) {
        this.audit.audit('Adding ' + o1 + ' , ' + o2);
        return o1 + o2;
    }
}