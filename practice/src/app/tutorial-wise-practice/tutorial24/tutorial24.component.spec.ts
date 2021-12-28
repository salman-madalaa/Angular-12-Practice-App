import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial24Component } from './tutorial24.component';

describe('Tutorial24Component', () => {
  let component: Tutorial24Component;
  let fixture: ComponentFixture<Tutorial24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial24Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
