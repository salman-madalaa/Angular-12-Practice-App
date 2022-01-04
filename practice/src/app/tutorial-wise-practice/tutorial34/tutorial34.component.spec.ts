import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial34Component } from './tutorial34.component';

describe('Tutorial34Component', () => {
  let component: Tutorial34Component;
  let fixture: ComponentFixture<Tutorial34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial34Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
