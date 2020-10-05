import { NumberSymbol } from '@angular/common';
import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { Iitem } from 'src/interfaces/item.interface';
import { item } from 'src/_models/slides';

@Component({
  selector: 'app-main-page',
  templateUrl: './app-main-page.component.html',
  styleUrls: ['./app-main-page.component.css'],
})
export class AppMainPageComponent {
  @ViewChild(MatTable) table: MatTable<any>;

  dataSource: MatTableDataSource<any>;

  constructor(private router: Router) {
    this.dataSource = new MatTableDataSource(this.array);
  }

  array: Iitem[] = [];

  displayedColumns: string[] = ['name', 'quantidade', 'preço', 'remover'];

  totalCost: number;
  totalQuantity: number;

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

  goToCheckout() {
    this.router.navigate(['checkout'], {
      state: {
        list: this.dataSource.data,
      },
    });
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
}
