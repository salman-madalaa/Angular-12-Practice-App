import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial40Component } from './tutorial40.component';

describe('Tutorial40Component', () => {
  let component: Tutorial40Component;
  let fixture: ComponentFixture<Tutorial40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial40Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
