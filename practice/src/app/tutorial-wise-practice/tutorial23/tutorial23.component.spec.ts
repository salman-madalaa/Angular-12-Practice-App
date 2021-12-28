import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial23Component } from './tutorial23.component';

describe('Tutorial23Component', () => {
  let component: Tutorial23Component;
  let fixture: ComponentFixture<Tutorial23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
