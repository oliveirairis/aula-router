import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  num: number = 1;
  constructor() {}

  ngOnInit() {}

  tabuada() {
    for (let i = 1; i <= 10; i++) {
      return this.num * i;
    }
  }
}
