import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Iitem } from 'src/interfaces/item.interface';
import { PedidoService } from 'src/service/pedido.service';
import { item } from 'src/_models/slides';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './app-checkout-page.component.html',
  styleUrls: ['./app-checkout-page.component.css'],
})
export class AppCheckoutPageComponent implements OnInit {
  checkoutInfo: any;
  currentState$: Observable<any>;
  items: Iitem[] = [];

  displayedColumns: string[] = ['name', 'preço'];

  form: FormGroup;

  totalCost: number;

  selectedDate: string;

  pedidos: string;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private pedidoService: PedidoService
  ) {
    const currentState = this.router.getCurrentNavigation();
    if (currentState && currentState.extras && currentState.extras.state) {
      console.log(currentState.extras.state.list);
      console.log(currentState.extras.state.date);
      this.items = currentState.extras.state.list;
    }
  }

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

  getTotalCost() {
    this.totalCost = this.items
      .map((t) => Number(t.price))
      .reduce((acc, value) => acc + value, 0);
  }
}
