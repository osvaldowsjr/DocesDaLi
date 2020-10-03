import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { calendarFormat } from 'moment';
import { item } from 'src/_models/slides';

@Component({
  selector: 'app-main-page',
  templateUrl: './app-main-page.component.html',
  styleUrls: ['./app-main-page.component.css'],
})
export class AppMainPageComponent {
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private router: Router) {}

  //array: number[] = [];

  items: item[] = [];
  date = NONE_TYPE;
  displayedColumns: string[] = ['name', 'quantidade', 'preço', 'remover'];

  dateSelected: String = 'Alou';

  objToSend: NavigationExtras = {
    queryParams: {
      list: this.items,
      moment: this.date,
    },
  };

  onDateSelected(event) {
    this.objToSend.state.date = event;
  }

  onItemAdded(event) {
    // this.array.push(event.id);

    // for (let i = 0; i < this.array.length; i++) {
    //   if (event.id == this.array[i]) {
    //   } else {
    //   }
    // }

    this.items.push(event);
    this.table.renderRows();
  }

  onClickDelete(id: any) {
    this.items.splice(id, 1);
    this.table.renderRows();
  }

  goToCheckout() {
    this.router.navigate(['checkout'], { state: { data: this.objToSend } });
  }

  getTotalCost() {
    return this.items
      .map((t) => Number(t.price))
      .reduce((acc, value) => acc + value, 0);
  }
}
