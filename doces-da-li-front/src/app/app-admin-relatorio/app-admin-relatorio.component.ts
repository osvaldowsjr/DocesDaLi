import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmPedidos } from 'src/interfaces/adm-pedido.interface';
import { PedidoService } from 'src/service/pedido.service';

@Component({
  selector: 'app-admin-relatorio',
  templateUrl: './app-admin-relatorio.component.html',
  styleUrls: ['./app-admin-relatorio.component.css'],
})
export class AppAdminRelatorioComponent implements OnInit {
  columnsToDisplay: string[] = ['Produtos', 'Quantidade', 'Preco'];

  data: AdmPedidos[];

  pedidos: any[];
  pedido: any[] = [];

  result: any[] = [];

  constructor(private pedidoService: PedidoService, private route: Router) {}

  ngOnInit(): void {
    this.pedidoService.getTodosPedidos().subscribe((data) => {
      this.data = data;
      this.pedidos = this.data.map((x) => x.pedido);

      this.data.filter((x) => x.data);

      this.pedidos.forEach((element) =>
        element.map((x) => this.pedido.push(x))
      );

      this.pedido.reduce((res, value) => {
        if (!res[value.id]) {
          res[value.id] = {
            id: value.id,
            nome: value.name,
            quantidade: 0,
            price: 0,
          };
          this.result?.push(res[value.id]);
        }
        res[value.id].quantidade += value.quantidade;
        res[value.id].price += value.price;
        return res;
      }, {});
    });
  }

  voltar() {
    this.route.navigate(['admin']);
  }
}
