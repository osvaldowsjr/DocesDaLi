import { Component, EventEmitter, Output } from '@angular/core';
import { Iitem } from 'src/interfaces/item.interface';

@Component({
  selector: 'app-main-page-carousel',
  templateUrl: './app-main-page-carousel.component.html',
  styleUrls: ['./app-main-page-carousel.component.css'],
})
export class AppMainPageCarouselComponent {
  @Output() product: EventEmitter<Iitem> = new EventEmitter<Iitem>();

  constructor() {}

  productList: Iitem[] = [
    {
      id: 1,
      name: 'Torta de Limão',
      description: 'Torta de limão coberta com chocolate',
      price: 10,
      imageurl:
        'https://cdn.pixabay.com/photo/2017/03/15/19/18/tartlet-2147173_1280.jpg',
      quantidade: 1,
    },
    {
      id: 2,
      name: 'Bolo de Chocolate',
      description: 'Delicioso bolo de chocolate',
      price: 20,
      imageurl:
        'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_1280.jpg',
      quantidade: 1,
    },

    {
      id: 3,
      name: 'Bolo de Cenoura',
      description: 'Delicioso bolo de cenoura',
      price: 15,
      imageurl:
        'https://cdn.pixabay.com/photo/2018/02/04/01/29/cake-3128860_960_720.jpg',
      quantidade: 1,
    },

    {
      id: 4,
      name: 'Cookies',
      description: 'Delicioso cookie',
      price: 25,
      imageurl:
        'https://cdn.pixabay.com/photo/2019/12/08/15/16/cookies-4681337_960_720.jpg',
      quantidade: 1,
    },
    {
      id: 5,
      name: 'Cupcake',
      description: 'Delicioso cupcake',
      price: 30,
      imageurl:
        'https://cdn.pixabay.com/photo/2015/03/26/09/39/cupcakes-690040_960_720.jpg',
      quantidade: 1,
    },

    {
      id: 6,
      name: 'Cheesecake',
      description: 'Delicioso Cheesecake',
      price: 30,
      imageurl:
        'https://cdn.pixabay.com/photo/2016/08/08/16/20/cheesecake-1578691_960_720.jpg',
      quantidade: 1,
    },
  ];

  clickButton(id: number) {
    this.product.emit(this.productList[id]);
  }

  mySlideOptions = {
    dotsEach: true,
    nav: true,
    stagePadding: 20,
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
}
