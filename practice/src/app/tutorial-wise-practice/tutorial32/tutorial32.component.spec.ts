import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial32Component } from './tutorial32.component';

describe('Tutorial32Component', () => {
  let component: Tutorial32Component;
  let fixture: ComponentFixture<Tutorial32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
