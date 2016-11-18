import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  color: string;
  constructor() { }

  ngOnInit() {
    this.color = 'blue';
  }

}
