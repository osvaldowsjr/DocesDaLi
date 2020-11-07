import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdmPedidos } from 'src/interfaces/adm-pedido.interface';
import { Item } from 'src/interfaces/item.interface';
import { Pedido } from 'src/interfaces/pedido.interface';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  private pedidos: Pedido[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {}

  adicionarPedido(
    id_cliente: string,
    pedido: Item[],
    endereco: FormData,
    data: string
  ) {
    const Pedido: Pedido = {
      id_cliente: id_cliente,
      pedido: pedido,
      endereco: endereco,
      data: data,
    };
    this.httpClient
      .post<{ mensagem: string; id: string }>(
        'http://localhost:4000/pedidos/register',
        Pedido
      )
      .subscribe((dados) => {
        Pedido.id_pedido = dados.id;
        this.pedidos.push(Pedido);
      });
  }

  getTodosPedidos(): Observable<AdmPedidos[]> {
    return this.httpClient.get<AdmPedidos[]>('http://localhost:4000/pedidos');
  }
}
