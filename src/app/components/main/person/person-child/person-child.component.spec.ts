import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonChildComponent } from './person-child.component';

describe('PersonChildComponent', () => {
  let component: PersonChildComponent;
  let fixture: ComponentFixture<PersonChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
