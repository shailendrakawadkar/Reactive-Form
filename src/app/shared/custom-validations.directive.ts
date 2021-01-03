import { Directive } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { SignupFormComponent } from '../signup-form/signup-form.component';

@Directive({
  selector: '[appCustomValidations]'
})
export class CustomValidationsDirective {

  
  constructor() { }
 matchPass( ): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
       if(control.value == "hello") {
         return {'true' : true};
       }
       return null;
    };
}

}