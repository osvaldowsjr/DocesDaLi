import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/service/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css'],
})
export class AppLoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.clienteService
      .autenticarCliente(this.form.value.email, this.form.value.password)
      .subscribe((dados) => {
        localStorage.setItem('token', dados.token);

        if (this.f.email.value == 'admin@admin.com') {
          this.router.navigate(['/admin']);
        } else this.router.navigate(['/main']);
      });
  }
  onRegister() {
    this.router.navigate(['/register']);
  }
}
