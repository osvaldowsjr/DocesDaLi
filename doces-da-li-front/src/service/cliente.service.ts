import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Cliente } from 'src/interfaces/cliente.interface';
import { Observable } from 'rxjs/internal/Observable';
import { ToastrService } from 'ngx-toastr';
import { NgZone } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private clientes: Cliente[] = [];
  private listaClientesAtualizada = new Subject<Cliente[]>();

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private toastrService: ToastrService,
    private zone: NgZone
  ) {}

  adicionarCliente(nome: string, email: string, password: string) {
    const cliente: Cliente = { nome: nome, email: email, password: password };
    this.httpClient
      .post<{ mensagem: string; id: string }>(
        'http://localhost:4000/clientes/register',
        cliente
      )
      .subscribe((dados) => {
        cliente.id = dados.id;
        this.clientes.push(cliente);
        this.listaClientesAtualizada.next([...this.clientes]);
        this.router.navigate(['/']);
      });
  }

  getListaDeClientesAtualizadaObservable() {
    return this.listaClientesAtualizada.asObservable();
  }

  autenticarCliente(email: string, password: string): Observable<any> {
    const user = {
      email: email,
      password: password,
    };
    return this.httpClient.post<{
      mensagem: string;
      id: string;
      token: string;
    }>('http://localhost:4000/clientes/authenticate', user);
  }

  // private handleError(error: HttpErrorResponse) {
  //   this.zone.run(() => this.toastrService.error('Something went wrong!'));
  //   //alert(error.error.message);

  //   return throwError('Something bad happened; please try again later.');
  // }
}
