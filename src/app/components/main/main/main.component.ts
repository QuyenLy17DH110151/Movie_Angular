import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private shareService: SharedService) {}

  ngOnInit(): void {}

  public addItem(event: any) {
    this.shareService.emitChange(event);
  }
}
