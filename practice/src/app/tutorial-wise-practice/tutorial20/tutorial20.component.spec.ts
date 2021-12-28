import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial20Component } from './tutorial20.component';

describe('Tutorial20Component', () => {
  let component: Tutorial20Component;
  let fixture: ComponentFixture<Tutorial20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
