import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial17Component } from './tutorial17.component';

describe('Tutorial17Component', () => {
  let component: Tutorial17Component;
  let fixture: ComponentFixture<Tutorial17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
