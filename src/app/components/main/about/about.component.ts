import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('main')
  main!: ElementRef;

  @ViewChild('test')
  test!: ElementRef;

  @ViewChild('demoInput')
  demoInput!: ElementRef;

  @ViewChild('ok')
  ok!: ElementRef;

  constructor(private rd: Renderer2) {}

  ngAfterViewInit(): void {
    this.rd.setStyle(this.main.nativeElement, 'flex', 1);
    this.ok.nativeElement.innerHTML = 'cc';
  }

  ngOnInit(): void {}
}
