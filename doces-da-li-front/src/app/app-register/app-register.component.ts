import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/_helpers/must-match.validator';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: 'app-register.component.html',
    styleUrls: ['./app-register.component.css']
})

export class AppRegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    

    constructor(private formBuilder: FormBuilder, private router:Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
        this.router.navigate([
            "/login"
          ])
    }
}