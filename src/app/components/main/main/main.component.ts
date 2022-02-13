import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}
  @Output() eventEmit = new EventEmitter<number>();
  @Output() newItemEvent = new EventEmitter<number>();

  ngOnInit(): void {
    this.addItem(1);
  }

  public addItem(event: any) {
    console.log(event);
    this.eventEmit.emit(event);
  }
}
