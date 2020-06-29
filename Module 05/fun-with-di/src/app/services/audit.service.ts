import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuditService {
    public id: number;

    constructor() {
        this.id = Math.ceil(Math.random()*100000000);
        console.log('Audit Service created with id: ' + this.id);
    }

    audit(txt: string) {
        console.group('New Group')
        console.warn(txt);
        console.groupEnd();
    }
}