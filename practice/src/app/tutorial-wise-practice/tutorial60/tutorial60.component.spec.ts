import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial60Component } from './tutorial60.component';

describe('Tutorial60Component', () => {
  let component: Tutorial60Component;
  let fixture: ComponentFixture<Tutorial60Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial60Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
