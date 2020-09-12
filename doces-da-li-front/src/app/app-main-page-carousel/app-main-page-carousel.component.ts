import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Orientation } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-main-page-carousel',
  templateUrl: './app-main-page-carousel.component.html',
  styleUrls: ['./app-main-page-carousel.component.css']
})
export class AppMainPageCarouselComponent implements OnInit {

  public slidesList = new Array<never>(5);
  public showContent = false;

  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 5000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = false;
  public color: ThemePalette = 'accent';
  public maxWidth = 'auto';
  public maintainAspectRatio = true;
  public proportion = 24;
  public slideHeight = '100px';
  public slides = this.slidesList.length;
  public overlayColor = '#00000040';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';
  public log: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
