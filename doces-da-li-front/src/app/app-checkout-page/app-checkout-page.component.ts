import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { item } from 'src/_models/slides';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './app-checkout-page.component.html',
  styleUrls: ['./app-checkout-page.component.css']
})
export class AppCheckoutPageComponent implements OnInit {
  checkoutInfo:any;
  currentState$: Observable<any>;
  items: item[] = [];
  moment = ""
  displayedColumns: string[] = ['name', 'preço'];

  constructor(public route: ActivatedRoute,private router: Router){
    const currentState = this.router.getCurrentNavigation();
    if (currentState && currentState.extras && currentState.extras.state) {
      console.log(currentState.extras.state.list)
      console.log(currentState.extras.state.date)
      this.items = currentState.extras.state.list;
      this.moment = currentState.extras.state.date;
    } 
  }

  ngOnInit(): void {
  }

  
  getTotalCost() {
    return this.items.map(t => Number(t.price)).reduce((acc, value) => acc + value, 0);
  }

}
