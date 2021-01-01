import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'; 


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
 
})

 

export class LoginFormComponent implements OnInit {
 
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    
    this.loginForm = fb.group({
     
     user_name : ['',[ Validators.required,Validators.email]],
      userPass : ['', Validators.required]
    })
 
  }

  ngOnInit(): void {
 

  } 
}
