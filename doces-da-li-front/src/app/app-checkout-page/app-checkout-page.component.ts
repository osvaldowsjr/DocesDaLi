import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { item } from 'src/_models/slides';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './app-checkout-page.component.html',
  styleUrls: ['./app-checkout-page.component.css'],
})
export class AppCheckoutPageComponent implements OnInit {
  checkoutInfo: any;
  currentState$: Observable<any>;
  items: item[] = [];
  moment = '';
  displayedColumns: string[] = ['name', 'preço'];
  date = NONE_TYPE;

  form: FormGroup;

  objToSend: NavigationExtras = {
    queryParams: {
      list: this.items,
      moment: this.date,
    },
  };

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    const currentState = this.router.getCurrentNavigation();
    if (currentState && currentState.extras && currentState.extras.state) {
      console.log(currentState.extras.state.list);
      console.log(currentState.extras.state.date);
      this.items = currentState.extras.state.list;
      this.moment = currentState.extras.state.date;
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      street: [''],
      zipCode: [''],
      complement: [''],
      number: [''],
    });
  }

  onDateSelected(event) {
    this.objToSend.state.date = event;
  }

  getTotalCost() {
    return this.items
      .map((t) => Number(t.price))
      .reduce((acc, value) => acc + value, 0);
  }
}
