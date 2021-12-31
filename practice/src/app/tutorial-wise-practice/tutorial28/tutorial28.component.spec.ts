import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial28Component } from './tutorial28.component';

describe('Tutorial28Component', () => {
  let component: Tutorial28Component;
  let fixture: ComponentFixture<Tutorial28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial28Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
