import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewregisteredComponent } from './viewregistered.component';

describe('ViewregisteredComponent', () => {
  let component: ViewregisteredComponent;
  let fixture: ComponentFixture<ViewregisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewregisteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewregisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
