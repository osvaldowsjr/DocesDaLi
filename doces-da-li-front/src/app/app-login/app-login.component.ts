import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  form: FormGroup
  submitted = false;

  constructor(private formBuilder:FormBuilder, private router:Router) { 
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }else{
      if(this.f.email.value == "admin@admin.com.br"){
        this.router.navigate(['/storage'])
      }else
        this.router.navigate(['/main'])
    }
}
  onRegister(){
    this.router.navigate([
      "/register"
    ])

  }
}
