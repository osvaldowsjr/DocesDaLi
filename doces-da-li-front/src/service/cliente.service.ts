import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Cliente } from 'src/interfaces/cliente.interface';
import { Observable } from 'rxjs/internal/Observable';
import { AuthCliente } from 'src/interfaces/auth-cliente.interface';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  constructor(private httpClient: HttpClient) {}

  adicionarCliente(cliente: Cliente): Observable<any> {
    return this.httpClient.post<{ mensagem: string; id: string }>(
      'http://localhost:4000/clientes/register',
      cliente
    );
  }

  autenticarCliente(user: AuthCliente): Observable<any> {
    return this.httpClient.post<{
      mensagem: string;
      id: string;
      token: string;
    }>('http://localhost:4000/clientes/authenticate', user);
  }
}
