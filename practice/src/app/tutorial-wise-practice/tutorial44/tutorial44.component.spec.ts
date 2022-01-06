import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial44Component } from './tutorial44.component';

describe('Tutorial44Component', () => {
  let component: Tutorial44Component;
  let fixture: ComponentFixture<Tutorial44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial44Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
