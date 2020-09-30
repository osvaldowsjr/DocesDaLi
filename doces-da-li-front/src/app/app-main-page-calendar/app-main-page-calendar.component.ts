import { Component, EventEmitter, Output} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main-page-calendar',
  templateUrl: './app-main-page-calendar.component.html',
  styleUrls: ['./app-main-page-calendar.component.css']
})
export class AppMainPageCalendarComponent {

  selectedDate = new Date();
  startAt = new Date();
  minDate = new Date(new Date().setDate(new Date().getDate() +1));
  maxDate = new Date(new Date().setMonth(new Date().getMonth() + 2));
  year: any;
  DayAndDate: string;

  @Output()
  dateSelected: EventEmitter<string> = new EventEmitter();

  constructor(){
    this.onSelect(this.selectedDate);
  }

  onSelect(event) {
    console.log(event);
    this.selectedDate = event;
    const dateString = event.toDateString();
    const dateValue = dateString.split(' ');
    this.year = dateValue[3];
    this.DayAndDate = dateValue[0] + ',' + ' ' + dateValue[1] + ' ' + dateValue[2];
    this.dateSelected.emit(this.DayAndDate)
  }

  myFilter = (d: any): boolean => {
    const day = d.weekday();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
}
}
