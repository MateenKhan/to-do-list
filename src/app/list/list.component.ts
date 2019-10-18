import { Component, OnInit } from '@angular/core';
import 'hammerjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public swipe = 0;
  todos = [{ text: 'asdf', isChecked: true }];

  constructor() { }

  ngOnInit() {
  }

  newItem() {

  }

  swipeEvent(e) {
    this.swipe++;
  }
}
