import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial53Component } from './tutorial53.component';

describe('Tutorial53Component', () => {
  let component: Tutorial53Component;
  let fixture: ComponentFixture<Tutorial53Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tutorial53Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tutorial53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
