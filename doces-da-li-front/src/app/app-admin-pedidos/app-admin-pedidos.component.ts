import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AdmPedidos } from 'src/interfaces/adm-pedido.interface';
import { PedidoService } from 'src/service/pedido.service';

@Component({
  selector: 'app-admin-pedidos',
  templateUrl: './app-admin-pedidos.component.html',
  styleUrls: ['./app-admin-pedidos.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class AppAdminPedidosComponent implements OnInit {
  columnsToDisplay: string[] = [
    'IdPedido',
    'DataEntrega',
    'Endereco',
    'Expandir',
  ];
  innerDisplayedColumns = ['Nome', 'Descricao', 'Preco', 'Quantidade'];
  data: AdmPedidos[];
  expandedElement: AdmPedidos | null;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidoService
      .getTodosPedidos()
      .subscribe((data) => (this.data = data));
  }
}
