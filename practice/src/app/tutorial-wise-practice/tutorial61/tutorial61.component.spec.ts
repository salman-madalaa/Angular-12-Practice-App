import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial61Component } from './tutorial61.component';

describe('Tutorial61Component', () => {
  let component: Tutorial61Component;
  let fixture: ComponentFixture<Tutorial61Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial61Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
