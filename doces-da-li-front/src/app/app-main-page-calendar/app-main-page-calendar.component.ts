import { Component, Output, EventEmitter, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';
import { MatCalendar } from '@angular/material/datepicker/calendar';

@Component({
  selector: 'app-main-page-calendar',
  templateUrl: './app-main-page-calendar.component.html',
  styleUrls: ['./app-main-page-calendar.component.css']
})
export class AppMainPageCalendarComponent {

  @Output()
  dateSelected: EventEmitter<Moment> = new EventEmitter();

  @Output()
  selectedDate = moment();

  @ViewChild('calendar', { static: true })
  calendar: MatCalendar<Moment>;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {}

  monthSelected(date: Moment) {
    console.log('month changed');
  }

  dateChanged() {
    this.calendar.activeDate = this.selectedDate;
    this.dateSelected.emit(this.selectedDate);
  }

}
