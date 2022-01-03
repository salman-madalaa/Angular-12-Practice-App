import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial30Component } from './tutorial30.component';

describe('Tutorial30Component', () => {
  let component: Tutorial30Component;
  let fixture: ComponentFixture<Tutorial30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial30Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
