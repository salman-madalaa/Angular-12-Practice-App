import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial54Component } from './tutorial54.component';

describe('Tutorial54Component', () => {
  let component: Tutorial54Component;
  let fixture: ComponentFixture<Tutorial54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial54Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
