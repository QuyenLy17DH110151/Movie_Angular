import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  @Input() valueChild: string = '0';
  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home' },
      { label: 'About', icon: 'pi pi-fw pi-calendar', routerLink: '/about' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      {
        label: 'Documentation',
        icon: 'pi pi-fw pi-file',
        routerLink: '/person',
      },
      { label: this.valueChild, icon: 'pi pi-fw pi-cog' },
    ];
    // console.log(this.valueChild);
  }
}
