import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
  child: string = '';
  title = 'movie-app';
  constructor(private shareService: SharedService) {}

  ngOnInit(): void {
    this.shareService.changeEmitted$.subscribe((res) => {
      this.child = res;
    });
  }

  ngAfterViewInit(): void {}
}
