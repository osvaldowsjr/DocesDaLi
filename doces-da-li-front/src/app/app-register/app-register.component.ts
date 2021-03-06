import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/_helpers/must-match.validator';
import { Router } from '@angular/router';
import { ClienteService } from 'src/service/cliente.service';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/interfaces/cliente.interface';

@Component({
  selector: 'app-register',
  templateUrl: 'app-register.component.html',
  styleUrls: ['./app-register.component.css'],
})
export class AppRegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  clientes: Cliente[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clienteService: ClienteService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        nome: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.clienteService
      .adicionarCliente(this.registerForm.value)
      .subscribe((dados) => {
        this.clientes.push(dados);
      });

    this.toastrService.success('Sucesso!', 'Usuário Registrado!!');
    this.router.navigate(['/login']);
  }
}
