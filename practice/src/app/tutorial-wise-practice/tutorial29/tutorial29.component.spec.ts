import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial29Component } from './tutorial29.component';

describe('Tutorial29Component', () => {
  let component: Tutorial29Component;
  let fixture: ComponentFixture<Tutorial29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial29Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
