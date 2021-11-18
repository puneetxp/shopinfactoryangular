import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckphoneComponent } from './checkphone.component';

describe('CheckphoneComponent', () => {
  let component: CheckphoneComponent;
  let fixture: ComponentFixture<CheckphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckphoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
