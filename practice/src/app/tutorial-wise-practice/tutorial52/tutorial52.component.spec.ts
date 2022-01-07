import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial52Component } from './tutorial52.component';

describe('Tutorial52Component', () => {
  let component: Tutorial52Component;
  let fixture: ComponentFixture<Tutorial52Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial52Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
