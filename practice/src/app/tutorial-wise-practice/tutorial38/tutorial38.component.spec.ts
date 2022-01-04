import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial38Component } from './tutorial38.component';

describe('Tutorial38Component', () => {
  let component: Tutorial38Component;
  let fixture: ComponentFixture<Tutorial38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial38Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
