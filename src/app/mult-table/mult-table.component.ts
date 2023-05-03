import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mult-table',
  templateUrl: './mult-table.component.html',
  styleUrls: ['./mult-table.component.css'],
})
export class MultTableComponent implements OnInit {
  counter: number = 0;

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.counter += 1;
    }, 1000);
  }
}
