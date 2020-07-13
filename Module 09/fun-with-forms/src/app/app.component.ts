import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AsyncValidatorFn, FormArray } from '@angular/forms';
import { MyValidators } from './core/validators/min-words-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private data: DataService) { }

  group: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.group = new FormGroup({
      username: new FormControl('', Validators.required, (ctrl) => this.data.validateUser(ctrl)),
      email: new FormControl('', Validators.email),
      fullname: new FormControl('', [Validators.required, MyValidators.minWords(2)]),
      description: new FormControl('', [
        Validators.minLength(10),
        Validators.required,
        MyValidators.minWords(6)
      ]),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl()
      }),
      children: new FormArray([])
    });
  }

  getChildrenArray(): FormArray {
    return this.group.get('children') as FormArray;
  }

  addNewChild() {
    this.getChildrenArray().push(new FormControl(''));
  }

  removeChild(index: number) {
    this.getChildrenArray().removeAt(index);
  }

  setSomeData() {
    const data = this.data.getRandomPerson();


    while(this.getChildrenArray().controls.length < data.children.length) {
      this.addNewChild();
    }

    console.log(data);

    this.group.reset(data);

  }


}


