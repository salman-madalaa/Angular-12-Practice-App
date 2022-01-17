import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial9Component } from './tutorial9.component';

describe('Tutorial9Component', () => {
  let component: Tutorial9Component;
  let fixture: ComponentFixture<Tutorial9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
