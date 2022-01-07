import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial50Component } from './tutorial50.component';

describe('Tutorial50Component', () => {
  let component: Tutorial50Component;
  let fixture: ComponentFixture<Tutorial50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial50Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
