import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-child',
  templateUrl: './person-child.component.html',
  styleUrls: ['./person-child.component.css'],
})
export class PersonChildComponent implements OnInit {
  title: string = 'child';
  constructor() {}

  ngOnInit(): void {}
}
