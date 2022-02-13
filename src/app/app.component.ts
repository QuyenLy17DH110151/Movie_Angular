import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  child: string = '';
  title = 'movie-app';

  public dataFromChild(event: number) {
    this.child = event.toString();
  }

  ngAfterViewInit(): void {}
}
