import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly takenUsernames = [
    'johns', 
    'johnny', 
    'john'];

  private delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  async isUserAvailable(username: string): Promise<boolean> {
    await this.delay(2000);
    return !this.takenUsernames.includes(username);
  }

  async validateUser(control: AbstractControl): Promise<null | ValidationErrors> {
    const val = control?.value;
    if (typeof(val)!=='string') return null;

    const available = await this.isUserAvailable(val);

    if (available) return null;

    return {'userAvailable': true}
  }

  getRandomPerson(): Person {
    return {
      username: 'johnsmith', 
      email: 'john@smith.com', 
      fullname: 'John Smith', 
      description: 'A jolly good fella', 
      children: ['Jane', 'Jim'], 
      address: {
        city: 'London', 
        street: 'Baker'
      }
    }
  }

  constructor() { }
}
