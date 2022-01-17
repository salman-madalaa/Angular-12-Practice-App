import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial10Component } from './tutorial10.component';

describe('Tutorial10Component', () => {
  let component: Tutorial10Component;
  let fixture: ComponentFixture<Tutorial10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
