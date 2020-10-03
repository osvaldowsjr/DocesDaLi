import { Component, EventEmitter, Output} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main-page-calendar',
  templateUrl: './app-main-page-calendar.component.html',
  styleUrls: ['./app-main-page-calendar.component.css']
})
export class AppMainPageCalendarComponent {

  selectedDate = new Date(new Date().setDate(new Date().getDate() +5));
  startAt = new Date(new Date().setDate(new Date().getDate() +5));
  minDate = new Date(new Date().setDate(new Date().getDate() +5));
  maxDate = new Date(new Date().setMonth(new Date().getMonth() + 2));
  year: any;
  DayAndDate: string;

  @Output()
  dateSelected: EventEmitter<String> = new EventEmitter();

  constructor(){
    this.onSelect(this.selectedDate);
  }

  onSelect(event) {
    this.selectedDate = new Date(event);
    this.selectedDate.setHours(13)
    const dateString = this.selectedDate.toLocaleString();
    this.dateSelected.emit(dateString)
  }

  myFilter = (d: any): boolean => {
    const day = d.weekday();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
}
}
