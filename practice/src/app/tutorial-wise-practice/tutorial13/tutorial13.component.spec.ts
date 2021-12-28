import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial13Component } from './tutorial13.component';

describe('Tutorial13Component', () => {
  let component: Tutorial13Component;
  let fixture: ComponentFixture<Tutorial13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
