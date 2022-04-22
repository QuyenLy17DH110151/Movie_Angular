import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  items: MenuItem[] = [];
  title: string = 'ABC';
  constructor() {}

  ngOnInit(): void {}
}
