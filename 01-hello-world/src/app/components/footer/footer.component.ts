import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  anio: number;
  name: string;
  lastname: string;

  constructor() {
    this.anio = new Date().getFullYear();
    this.name = 'Tomas';
    this.lastname = 'Tortosa';
  }
}
