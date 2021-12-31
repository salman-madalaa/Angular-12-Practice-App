import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial27Component } from './tutorial27.component';

describe('Tutorial27Component', () => {
  let component: Tutorial27Component;
  let fixture: ComponentFixture<Tutorial27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
