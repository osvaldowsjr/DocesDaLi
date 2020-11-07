import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Doce } from 'src/interfaces/doce.interface';
import { Item } from 'src/interfaces/item.interface';
import { EstoqueDoceService } from 'src/service/estoqueDoce.service';

@Component({
  selector: 'app-main-page-carousel',
  templateUrl: './app-main-page-carousel.component.html',
  styleUrls: ['./app-main-page-carousel.component.css'],
})
export class AppMainPageCarouselComponent implements OnInit {
  @Output() product: EventEmitter<Item> = new EventEmitter<Item>();

  productList: Item[];
  wrg: Doce[];

  mySlideOptions: OwlOptions = {
    dotsEach: true,
    mouseDrag: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  constructor(private service: EstoqueDoceService) {}

  ngOnInit() {
    this.service.getEstoque().subscribe((data) => {
      this.wrg = data;

      let itens: Item[] = [];
      for (let i = 0; i < this.wrg.length; i++) {
        let doce = {
          id: this.wrg[i].id,
          name: this.wrg[i].nome,
          description: this.wrg[i].descricao,
          price: this.wrg[i].preco,
          imageurl: this.wrg[i].urlImagem,
          quantidade: 1,
        } as Item;
        itens.push(doce);
      }

      this.productList = itens;
    });
  }

  clickButton(id: number) {
    this.product.emit(this.productList[id]);
  }
}
