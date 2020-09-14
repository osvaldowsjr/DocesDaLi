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
  moment = NONE_TYPE
  displayedColumns: string[] = ['name', 'preço'];

  constructor(public route: ActivatedRoute,private router: Router){
    this.checkoutInfo = this.router.getCurrentNavigation().extras.state;
    console.log(this.checkoutInfo.data)
  }

  ngOnInit(): void {
    this.currentState$ = this.route.paramMap.pipe(
      map(() => window.history.state.data.queryParams)
    ); 
    this.items = this.checkoutInfo.data.queryParams.list
    this.moment = this.checkoutInfo.data.queryParams.moment
    console.log(this.moment)
  }

  
  getTotalCost() {
    return this.items.map(t => Number(t.price)).reduce((acc, value) => acc + value, 0);
  }

}
