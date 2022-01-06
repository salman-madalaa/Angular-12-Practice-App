import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial41Component } from './tutorial41.component';

describe('Tutorial41Component', () => {
  let component: Tutorial41Component;
  let fixture: ComponentFixture<Tutorial41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial41Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
