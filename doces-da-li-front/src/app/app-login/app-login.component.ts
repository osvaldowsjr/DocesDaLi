import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private clienteService: ClienteService,
    private toastrService: ToastrService
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
      .subscribe(
        (dados) => {
          localStorage.setItem('token', dados.token);
          localStorage.setItem('id_cliente', dados.email);

          if (this.f.email.value == 'admin@admin.com') {
            this.toastrService.success(
              'Login admin feito com sucesso',
              'Sucesso!'
            );
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/main']);
            this.toastrService.success('Login feito com sucesso', 'Sucesso!');
          }
        },
        (error) => {
          throw error;
        }
      );
  }
  onRegister() {
    this.router.navigate(['/register']);
  }
}
