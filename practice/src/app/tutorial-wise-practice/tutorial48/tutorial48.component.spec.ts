import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial48Component } from './tutorial48.component';

describe('Tutorial48Component', () => {
  let component: Tutorial48Component;
  let fixture: ComponentFixture<Tutorial48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial48Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
