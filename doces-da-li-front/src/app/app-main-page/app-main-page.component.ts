import { NumberSymbol } from '@angular/common';
import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { Iitem } from 'src/interfaces/item.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './app-main-page.component.html',
  styleUrls: ['./app-main-page.component.css'],
})
export class AppMainPageComponent {
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private router: Router) {}

  array: number[] = [];

  items: Iitem[] = [];
  displayedColumns: string[] = ['name', 'quantidade', 'preço', 'remover'];

  totalCost: number;
  quantity: number;

  onItemAdded(event) {
    this.array.push(event.id);

    for (let i = 0; i < this.items.length; i++) {
      if (event.id == this.items[i]) {
        this.quantity += this.quantity;
        console.log(this.quantity);
      } else {
        this.items.push(event);
        this.table.renderRows();
      }
    }
  }

  onClickDelete(id: any) {
    this.items.splice(id, 1);
    this.table.renderRows();
  }

  objToSend: NavigationExtras = {
    state: {
      list: this.items,
    },
  };

  goToCheckout() {
    this.router.navigate(['checkout'], this.objToSend);
  }

  getTotalCost() {
    return this.items
      .map((t) => Number(t.price))
      .reduce((acc, value) => acc + value, 0);
  }
}
