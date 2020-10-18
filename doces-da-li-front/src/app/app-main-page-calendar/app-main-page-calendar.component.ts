import { Component, EventEmitter, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main-page-calendar',
  templateUrl: './app-main-page-calendar.component.html',
  styleUrls: ['./app-main-page-calendar.component.css'],
})
export class AppMainPageCalendarComponent {
  selectedDate: Date;

  @Output()
  dateSelected: EventEmitter<String> = new EventEmitter();

  constructor() {}

  onSelect(event) {
    this.selectedDate = new Date(event);
    const dateString = this.selectedDate.toLocaleDateString();
    this.dateSelected.emit(dateString);
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}
