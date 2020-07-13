import { AbstractControl, ValidationErrors } from "@angular/forms";

export class MyValidators {
    private static myTrueValidator(control: AbstractControl, count: number): null | ValidationErrors {
        const val = control?.value;

        if (typeof (val) !== 'string') return null;

        const words = val.split(' ').filter(w => w.length > 0);

        if (words.length >= count) return null;

        return {
            'minWords': {
                actualWords: words.length,
                requiredWords: count
            }
        }    
    }

    static minWords(count: number): (ctrl: AbstractControl) => null | ValidationErrors {
        return (control: AbstractControl) => this.myTrueValidator(control, count);
    }
}

