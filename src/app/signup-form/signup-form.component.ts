import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import '../shared/custom-validations.directive'; 
import { matchPass } from '../shared/validtor';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  get name() {
    return this.signupForm.get('name');
  }

  get email() {
    return this.signupForm.get('email')!;
  }

  get pass() {
    return this.signupForm.get('pass');
  }

  get re_pass() {
    return this.signupForm.get('re_pass');
  }

  signupForm = this.fb.group({
    name    : ['', Validators.required],
    email   : ['', Validators.required],
    pass    : ['', Validators.required],
    re_pass : ['', [Validators.required, matchPass]],
  });

  ngOnInit(): void {

  }

}
