import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial45Component } from './tutorial45.component';

describe('Tutorial45Component', () => {
  let component: Tutorial45Component;
  let fixture: ComponentFixture<Tutorial45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial45Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
