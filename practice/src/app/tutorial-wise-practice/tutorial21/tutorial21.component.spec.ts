import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial21Component } from './tutorial21.component';

describe('Tutorial21Component', () => {
  let component: Tutorial21Component;
  let fixture: ComponentFixture<Tutorial21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
