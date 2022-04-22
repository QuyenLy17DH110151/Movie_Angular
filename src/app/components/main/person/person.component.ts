import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { PersonChildComponent } from './person-child/person-child.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit, AfterViewInit {
  @ViewChild(PersonChildComponent) child!: FooterComponent;
  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    console.log(this.child.title);
    this.child.title = 'cc';
    this.cd.detectChanges();
  }

  ngOnInit(): void {}
}
