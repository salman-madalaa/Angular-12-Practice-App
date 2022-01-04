import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial35Component } from './tutorial35.component';

describe('Tutorial35Component', () => {
  let component: Tutorial35Component;
  let fixture: ComponentFixture<Tutorial35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial35Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
