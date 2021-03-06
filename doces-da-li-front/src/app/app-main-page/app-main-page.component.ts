import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Item } from 'src/interfaces/item.interface';
import { PedidoService } from 'src/service/pedido.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './app-main-page.component.html',
  styleUrls: ['./app-main-page.component.css'],
})
export class AppMainPageComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;

  dataSource: MatTableDataSource<any>;

  constructor(
    private formBuilder: FormBuilder,
    private pedidoService: PedidoService
  ) {
    this.dataSource = new MatTableDataSource(this.array);
  }

  form: FormGroup;

  array: Item[] = [];

  displayedColumns: string[] = ['name', 'quantidade', 'preço', 'remover'];

  totalCost: number;
  totalQuantity: number;

  selectedDate: string;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      street: [''],
      zipCode: [''],
      complement: [''],
      number: [''],
    });

    this.getTotalCost();
  }

  onSelectDate(event) {
    this.selectedDate = event;
  }

  onItemAdded(event) {
    if (this.dataSource.data.includes(event)) {
      for (let i = 0; i < this.dataSource.data.length; i++) {
        if (event.id === this.dataSource.data[i].id) {
          this.dataSource.data[i].quantidade += 1;
          break;
        }
      }
    } else {
      this.dataSource.data.push(event);
    }

    this.dataSource.data = this.array;
  }

  onClickDelete(id: any) {
    if (this.dataSource.data[id].quantidade > 1) {
      this.dataSource.data[id].quantidade -= 1;
    } else {
      this.dataSource.data.splice(id, 1);
    }
    this.dataSource.data = this.array;
  }

  getTotalCost() {
    return this.dataSource.data
      .map((t) => +(t.price * t.quantidade))
      .reduce((acc, value) => acc + value, 0);
  }

  getTotalQuantity() {
    return this.dataSource.data
      .map((t) => t.quantidade)
      .reduce((acc, value) => acc + value, 0);
  }

  onConfirmarPedido() {
    this.pedidoService.adicionarPedido(
      localStorage.getItem('id_cliente'),
      this.array,
      this.form.value,
      this.selectedDate
    );
  }
}
