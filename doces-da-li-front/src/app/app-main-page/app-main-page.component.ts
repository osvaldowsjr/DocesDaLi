import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { item } from 'src/_models/slides';

@Component({
  selector: 'app-main-page',
  templateUrl: './app-main-page.component.html',
  styleUrls: ['./app-main-page.component.css']
})
export class AppMainPageComponent{
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private router: Router){}

  items: item[] = [];
  dateSelected: String = "Alou";
  displayedColumns: string[] = ['name', 'preço','remover'];


  onDateSelected(event){
    this.objToSend.state.date = event
  }

  onItemAdded(event){
    this.items.push(event);
    this.table.renderRows();
  }

  onClickDelete(id: any){
      this.items.splice(id, 1);
      this.table.renderRows();
  }

  objToSend:NavigationExtras = {
    state:{
      list : this.items,
      date: this.dateSelected
    }
  }
  goToCheckout(){
    this.router.navigate(['checkout'],this.objToSend)
  }

  getTotalCost() {
    return this.items.map(t => Number(t.price)).reduce((acc, value) => acc + value, 0);
  }
}
