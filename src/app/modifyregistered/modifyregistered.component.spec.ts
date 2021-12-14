import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyregisteredComponent } from './modifyregistered.component';

describe('ModifyregisteredComponent', () => {
  let component: ModifyregisteredComponent;
  let fixture: ComponentFixture<ModifyregisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyregisteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyregisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
