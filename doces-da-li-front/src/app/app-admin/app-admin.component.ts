import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './app-admin.component.html',
  styleUrls: ['./app-admin.component.css'],
})
export class AppAdminComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  relatorio() {
    this.router.navigate(['relatorio']);
  }
}
