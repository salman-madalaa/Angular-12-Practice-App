import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial14Component } from './tutorial14.component';

describe('Tutorial14Component', () => {
  let component: Tutorial14Component;
  let fixture: ComponentFixture<Tutorial14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
