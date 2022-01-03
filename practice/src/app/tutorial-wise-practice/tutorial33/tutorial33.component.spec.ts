import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial33Component } from './tutorial33.component';

describe('Tutorial33Component', () => {
  let component: Tutorial33Component;
  let fixture: ComponentFixture<Tutorial33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial33Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
