import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial56Component } from './tutorial56.component';

describe('Tutorial56Component', () => {
  let component: Tutorial56Component;
  let fixture: ComponentFixture<Tutorial56Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial56Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
