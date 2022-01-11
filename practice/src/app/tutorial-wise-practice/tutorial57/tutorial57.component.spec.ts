import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial57Component } from './tutorial57.component';

describe('Tutorial57Component', () => {
  let component: Tutorial57Component;
  let fixture: ComponentFixture<Tutorial57Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial57Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
