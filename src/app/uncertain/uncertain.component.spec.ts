import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncertainComponent } from './uncertain.component';

describe('UncertainComponent', () => {
  let component: UncertainComponent;
  let fixture: ComponentFixture<UncertainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncertainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncertainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
