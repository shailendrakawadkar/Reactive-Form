import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],

})



export class LoginFormComponent implements OnInit {

  constructor(private fb: FormBuilder) {  }
 
get userPass() {
  return this.loginForm.get("userPass");
}

  loginForm = this.fb.group({

    user_name: ['', [Validators.required, Validators.email]],
    userPass: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
  })
  ngOnInit(): void {


  }
}
