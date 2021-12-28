import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial18Component } from './tutorial18.component';

describe('Tutorial18Component', () => {
  let component: Tutorial18Component;
  let fixture: ComponentFixture<Tutorial18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
